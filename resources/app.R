library(shiny)
library(ggplot2)
library(tidyverse)

# Define UI
ui <- fluidPage(
  tabsetPanel(
    tabPanel("Predict v2.1",
             headerPanel("PREDICT v2.1"),
             wellPanel(
               fluidRow(
                 column(2, 
                        numericInput(inputId = "age.diag", label = "Age at diagnosis", 50, 
                                     min = 20, max = 80)),
                 column(2, 
                        numericInput(inputId = "size", label = "Tumour size (mm)", 20, 
                                     min = 1, max = 100)),
                 column(2,
                        numericInput(inputId = "nodes", label = "Nodes positive", 0, 
                                     min = 0, max = 20)) ,
                 column(2,
                        numericInput(inputId = "grade", label = "Grade", 1, 
                                     min = 1, max = 3)),
                 column(2,
                        radioButtons(inputId = "screen", label = "Detection mode",
                                     c("Screen detected" = 1, "Symptomatic" = 0)))
                 ),
               
               fluidRow( 
                 column(2,
                        radioButtons(inputId = "er", label = "ER status", 
                                     c("Neg" = 0, "Pos" = 1 ))),
                 column(2,
                        radioButtons(inputId = "her2", label = "HER2 status",
                                     c("Unkown" = 9, "Neg" = 0, "Pos" = 1))),
                 column(2,
                        radioButtons(inputId = "ki67", label = "KI67 status",
                                     c("Unkown" = 9, "Neg" = 0, "Pos" = 1))),
                 column(2,
                        radioButtons(inputId = "horm", label = "Adj hormone",
                                     c("No" = 0, "Yes" = 1))),
                 column(2,
                        radioButtons(inputId = "generation", label = "Adj chemo",
                                     c("None" = 0, "Second gen" = 2, "Third gen" = 3))),
                 column(2,
                        radioButtons(inputId = "traz", label = "Trastuzumab",
                                     c("No" = 0, "Yes" = 1))),
                 column(2,
                        radioButtons(inputId = "radio", label = "Radiotherapy",
                                     c("No" = 0, "Yes" = 1))),
                 column(2,
                        radioButtons(inputId = "bis", label = "Bisphosphonates",
                                     c("No" = 0, "Yes" = 1))))
               ),
             
             fluidRow( 
               column(8,
                      plotOutput("cum.mort")))
             ),
    
    tabPanel("10yrs adj hormone",
             headerPanel("Added benefit of 10 v 5 years adj hormone therapy"),
             tags$p("This assumes survival to five years"),
             tags$p("No benefit of additional hormone therapy from 5-10 years"),
             tags$p("Relative risk reduction of 29% for years 10-15"),

             fluidRow( 
               column(8,
                      plotOutput("horm")))
             )
    )
)

server <- function(input, output) {
  
  data <- reactive({
    r.enabled  <- 1     # Radiotherapy enabled = 1, disabled = 0
    age.start <- input$age.diag
    er <- input$er
    size <- input$size
    nodes <- input$nodes
    grade <- input$grade
    screen <- ifelse(input$screen=="1", 1, 0)
    generation <- ifelse(input$generation =="0", 0, ifelse(input$generation=="2", 2, 3))
    
    # Derived variables  
    time <- c(1:15)
    age <- age.start - 1 + time
    grade.val <- ifelse(er==1, grade, ifelse(grade==1, 0, 1)) # Grade variable for ER neg
    
    r.prop   <- 0.69 # Proportion of population receiving radiotherapy
    r.breast <- 0.82 # Relative hazard breast specifi mortality from Darby et al
    r.other  <- 1.07 # Relative hazard other mortality from Darby et al
    r.base.br  <- log(1/((1-r.prop) + r.prop*r.breast))
    r.base.oth <- log(1/((1-r.prop) + r.prop*r.other))
    
    c.prop  <- 0.35 # Proportion getting chemotherapy in ECRIC data set
    c.other <- 1.2
    
    c.base.oth <- log(1/((1-c.prop) + c.prop*c.other))
    
    # Generate coefficients
    age.mfp.1  <- ifelse(er==1, (age.start/10)^-2-.0287449295, age.start-56.3254902)
    age.beta.1 <- ifelse(er==1, 34.53642, 0.0089827)
    age.mfp.2  <- ifelse(er==1, (age.start/10)^-2*log(age.start/10)-.0510121013, 0)
    age.beta.2 <- ifelse(er==1, -34.20342, 0)
    size.mfp   <- ifelse(er==1, log(size/100)+1.545233938, (size/100)^.5-.5090456276)
    size.beta  <- ifelse(er==1, 0.7530729, 2.093446)
    nodes.mfp  <- ifelse(er==1, log((nodes+1)/10)+1.387566896, log((nodes+1)/10)+1.086916249)
    nodes.beta <- ifelse(er==1, 0.7060723, .6260541)
    grade.beta <- ifelse(er==1, 0.746655, 1.129091)
    screen.beta <- ifelse(er==1, -0.22763366, 0)
    her2.beta <- ifelse(input$her2==1, 0.2413,
                        ifelse(input$her2==0, -0.0762,0 ))
    ki67.beta <- ifelse(input$ki67==1 & er==1, 0.14904,
                        ifelse(input$ki67==0 & er==1, -0.1133,0 ))
    
    # Other mortality prognostic index (mi)
    mi <- 0.0698252*((age.start/10)^2-34.23391957) + c.base.oth + r.base.oth
    
    # Breast cancer mortality prognostic index (pi)
    pi <- age.beta.1*age.mfp.1 + age.beta.2*age.mfp.2 + size.beta*size.mfp +
      nodes.beta*nodes.mfp + grade.beta*grade.val + screen.beta*screen + 
      her2.beta + ki67.beta + r.base.br
    
    c     <- ifelse(input$generation == 0, 0, ifelse(generation == 2, -.248, -.446))
    h     <- ifelse(input$horm==1 & er==1, -0.3857, 0)
    t     <- ifelse(input$her2==1 & input$traz==1, -.3567, 0)
    b     <- ifelse(input$bis==1, -0.198, 0) # Only applicable to menopausal women.
    #o    <- ifelse(ov==1, -0.2, 0) # Ready to add oophorectomy option
    h.plus<- -0.342  
    r.br  <- ifelse(input$radio==1, log(r.breast), 0)
    r.oth <- ifelse(input$radio==1, log(r.other), 0)
    c.oth <- ifelse(generation == 0, 0, log(c.other)) # Increased risk other mortality
    
    # Generate additional therapy reduction coefficients
    hc <- h + c
    ht <- h + t
    hb <- h + b 
    ct <- c + t # It is unlikely that hromone therapy would not be offered 
    cb <- c + b # in a woman with ER positive disease 
    tb <- t + b
    hct <- h + c + t
    hcb <- h + c + b
    htb <- h + t + b
    ctb <- c + t + b
    hctb <- h + c + t + b
    
    if(r.enabled == 1) {
      hr <- h + r.br
      rc <- r.br + c
      rt <- r.br + t
      rb <- r.br + b
      hrc <- h + r.br + c
      hrt <- h + r.br + t
      hrb <- h + r.br + b
      rct <- r.br + c + t
      rcb <- r.br + c + b
      rtb <- r.br + t + b
      hrct <- h + r.br + c + t
      hrcb <- h + r.br + t + b
      hrtb <- h + r.br + t + b
      rctb <- r.br + c + t + b
      hrctb <- h + r.br + c + t + b
    }
    
    # Generate cumulative baseline other mortality
    base.m.cum.oth <- exp(-6.052919 + (1.079863*log(time)) + (.3255321*time^.5))
    
    # Generate cumulative survival non-breast mortality
    s.cum.oth <- exp(-exp(mi)*base.m.cum.oth)
    
    # Generate annual baseline non-breast mortality
    base.m.oth <- base.m.cum.oth
    for (i in 2:15) {
      base.m.oth[i] <- base.m.cum.oth[i] - base.m.cum.oth[i-1] }
    
    # Loop for different treatment options
    rx.oth <- c(surg = 0,
                h = 0,
                c = c.oth,
                t = 0,
                b = 0,
                hc = c.oth,
                ht = 0,
                hb = 0,
                ct = c.oth,
                cb = c.oth,
                tb = 0,
                hct = c.oth,
                hcb = c.oth,
                htb = 0,
                ctb = c.oth,
                hctb = c.oth)
    if (r.enabled == 1) {
      rx.oth <- c(rx.oth, r = r.oth,
                  hr = r.oth,
                  rc = r.oth + c.oth,
                  rt = r.oth,
                  rb = r.oth,
                  hrc = r.oth + c.oth,
                  hrt = r.oth,
                  hrb = r.oth,
                  rct = r.oth + c.oth,
                  rcb = r.oth + c.oth,
                  rtb = r.oth,
                  hrct = r.oth + c.oth,
                  hrcb = r.oth + c.oth,
                  hrtb = r.oth,
                  rctb = r.oth + c.oth,
                  hrctb = r.oth + c.oth)
    }
    
    cols <- length(rx.oth) # Number of RX categories
    
    # Generate the annual non-breast mortality rate
    # Matrix (15x9) with column for each treatment
    m.oth.rx <- sapply(rx.oth, function(rx.oth, x.vector = base.m.oth) {
      output <-  x.vector*exp(mi + rx.oth)
      return(output)
    }
    )
    
    # Calculate the cumulative other mortality rate
    m.cum.oth.rx <- apply(m.oth.rx, 2, cumsum) 
    
    # Calculate the cumulative other survival
    s.cum.oth.rx <- exp(-m.cum.oth.rx)  
    
    # Convert cumulative mortality rate into cumulative risk
    m.cum.oth.rx <- 1- s.cum.oth.rx
    
    m.oth.rx <- m.cum.oth.rx
    for (j in 1:cols) {
      for (i in 2:15) {
        m.oth.rx[i,j] <- m.cum.oth.rx[i,j] - m.cum.oth.rx[i-1,j]
      }
    }
    
    
    
    # Generate cumulative baseline breast mortality
    # Generate cumulative baseline breast mortality
    if (er==1) {
      base.m.cum.br <- exp(0.7424402 - 7.527762/time^.5 - 1.812513*log(time)/time^.5) 
    } else { base.m.cum.br <- exp(-1.156036 + 0.4707332/time^2 - 3.51355/time)
    }
    
    # Generate annual baseline breast mortality
    base.m.br <- base.m.cum.br
    for (i in 2:15) {
      base.m.br[i] <- base.m.cum.br[i] - base.m.cum.br[i-1] }
    
    # Loop for different treatment options
    rx <- c(surg = 0,
            h = h,
            c = c,
            t = t,
            b = b,
            hc = hc,
            ht = ht,
            hb = hb,
            ct = ct,
            cb = cb,
            tb = tb,
            hct = hct,
            hcb = hcb,
            htb = htb,
            ctb = ctb,
            hctb = hctb)
    if (r.enabled == 1) {
      rx <- c(rx, r = r.br,
              hr = hr,
              rc = rc,
              rt = rt,
              rb = rb,
              hrc = hrc,
              hrt = hrt,
              hrb = hrb,
              rct = rct,
              rcb = rcb,
              rtb = rtb,
              hrct = hrct,
              hrcb = hrcb,
              hrtb = hrtb,
              rctb = rctb,
              hrctb = hrctb)
    }
    # Generate the annual breast cancer specific mortality rate
    m.br.rx <- sapply(rx, function(rx, x.vector = base.m.br) {
      output <-  x.vector*exp(pi + rx)
      return(output)
    }
    )
    
    # Calculate the cumulative breast cancer mortality rate
    m.cum.br.rx <- apply(m.br.rx, 2, cumsum) 
    
    # Calculate the cumulative breast cancer survival
    s.cum.br.rx <- exp(- m.cum.br.rx)  
    
    # Convert cumulative mortality rate into cumulative risk
    m.cum.br.rx <- 1- s.cum.br.rx
    
    m.br.rx <- m.cum.br.rx
    for (j in 1:cols) {
      for (i in 2:15) {
        m.br.rx[i,j] <- m.cum.br.rx[i,j] - m.cum.br.rx[i-1,j]
      }
    }
    
    m.cum.all.rx <- 1 - s.cum.oth.rx*s.cum.br.rx
    s.cum.all.rx <- 100-100*m.cum.all.rx
    
    # Annual all cause mortality
    m.all.rx <- m.cum.all.rx
    for (j in 1:cols) {
      for (i in 2:15) {
        m.all.rx[i,j] <- m.cum.all.rx[i,j] - m.cum.all.rx[i-1,j]
      }
    }
    
    # Proportion of all cause mortality that is breast cancer
    prop.br.rx      <- m.br.rx/(m.br.rx + m.oth.rx)
    pred.m.br.rx    <- prop.br.rx*m.all.rx
    pred.cum.br.rx  <- apply(pred.m.br.rx, 2, cumsum) 
    pred.m.oth.rx   <- m.all.rx - pred.m.br.rx
    pred.cum.oth.rx <- apply(pred.m.oth.rx, 2, cumsum)
    pred.cum.all.rx <- pred.cum.br.rx + pred.cum.oth.rx
    
    # rx benefits
    # version implemented on web has benefit as difference in breast specific mortality
    benefits2.1 <- 100*(pred.cum.all.rx[,1] - pred.cum.all.rx)
    
    delay <- 5   # Set delay to 0 to check predictions with main model
    rows  <- 15 - delay
    time  <- c(1:rows)
    age5   <- age.start + delay - 1 + time
    
    # Generate annual survival from cumulative survival
    m.oth.10 <- m.oth.rx[(1+delay):15]
    m.cum.oth.10 <- cumsum(m.oth.10)
    s.cum.oth.10 <- 1 - m.cum.oth.10
    
    # Generate the time specific treatment coefficients
    h5   <- c(rep(h,rows))
    h10  <- c(rep(h, rows - 5), rep(h.plus + h, 5))
    pi5  <- pi + h5 + r.br + c + t + b
    pi10 <- pi + h10 + r.br + c + t + b
    rx10 <- cbind(pi5, pi10)
    
    # Generate the annual breast cancer specific mortality rate
    m.br.rx.10 <- base.m.br[(1+delay):15]*exp(rx10)
    
    # Calculate the cumulative breast cancer mortality rate
    m.cum.br.rx.10 <- apply(m.br.rx.10, 2, cumsum)
    
    # Calculate the cumulative breast cancer survival
    s.cum.br.rx.10 <- exp(- m.cum.br.rx.10)  
    m.cum.br.rx.10 <- 1- s.cum.br.rx.10
    
    m.br.rx.10 <- m.cum.br.rx.10
    for (j in 1:2) {
      for (i in 2:rows) {
        m.br.rx.10[i,j] <- m.cum.br.rx.10[i,j] - m.cum.br.rx.10[i-1,j]
      }
    }
    
    # Cumulative all cause mortality conditional on surviving breast and all cause mortality
    m.cum.all.rx.10 <- 1 - s.cum.oth.10*s.cum.br.rx.10
    s.cum.all.rx.10 <- 100-100*m.cum.all.rx.10
    
    # Annual all cause mortality
    m.all.rx.10 <- m.cum.all.rx.10
    for (j in 1:2) {
      for (i in 2:rows) {
        m.all.rx.10[i,j] <- m.cum.all.rx.10[i,j] - m.cum.all.rx.10[i-1,j]
      }
    }
    
    # Proportion of all cause mortality that is breast cancer
    prop.br.rx.10      <- m.br.rx.10/(m.br.rx.10 + m.oth.10)
    pred.m.br.rx.10    <- prop.br.rx.10*m.all.rx.10
    pred.cum.br.rx.10  <- apply(pred.m.br.rx.10, 2, cumsum) 
    pred.m.oth.rx.10   <- m.all.rx.10 - pred.m.br.rx.10
    pred.cum.oth.rx.10 <- apply(pred.m.oth.rx.10, 2, cumsum)
    pred.cum.all.rx.10 <- pred.cum.br.rx.10 + pred.cum.oth.rx.10
    
    # rx benefits
    benefits2.1.10 <- 100*(pred.cum.all.rx.10[,1] - pred.cum.all.rx.10)
    
    #######################
    # Plotting the output #
    #######################
    
    rx <- c("a", "b", "c", "d", "e", "f", "g", "h")
    y05 <-c(100*(1-pred.cum.all.rx[5,1]), 
            benefits2.1[5,17], 
            benefits2.1[5,18]-benefits2.1[5,17], 
            benefits2.1[5,22]-benefits2.1[5,18],
            benefits2.1[5,28]-benefits2.1[5,22],
            benefits2.1[5,32]-benefits2.1[5,28],
            100,
            0)
    y10 <-c(100*(1-pred.cum.all.rx[10,1]), 
            benefits2.1[10,17], 
            benefits2.1[10,18]-benefits2.1[10,17], 
            benefits2.1[10,22]-benefits2.1[10,18],
            benefits2.1[10,28]-benefits2.1[10,22],
            benefits2.1[10,32]-benefits2.1[10,28],
            100*(1-pred.cum.all.rx.10[5,1]),
            benefits2.1.10[5,2])
    
    y15 <-c(100*(1-pred.cum.all.rx[15,1]), 
            benefits2.1[15,17], 
            benefits2.1[15,18]-benefits2.1[15,17], 
            benefits2.1[15,22]-benefits2.1[15,18],
            benefits2.1[15,28]-benefits2.1[15,22],
            benefits2.1[15,32]-benefits2.1[15,28],
            100*(1-pred.cum.all.rx.10[10,1]),
            benefits2.1.10[10,2])
    df <- cbind(rx,y05, y10, y15)
    df <- as_tibble(df)
    df <- df %>% gather(y05:y15, key = "year", value="survival")
    df
    
  })
  
  output$cum.mort <- renderPlot({
    
    x.labs <- c("Year 5", "Year 10" , "Year 15")
    rx.labs <- c("None", "Radio", "Hormone", "Chemo", "Traztuzumab", "Bisphos")
    rx.colors <- c("#fb8072", "#377eb8", "#4daf4a", "#984ea3", "#ffff33", "#ff7f00")
    df1 <- data()
    df1 <- filter(df1, (rx=="a" | rx=="b" | rx=="c" | rx=="d" | rx=="e" | rx=="f"))
    ggplot(data=df1, aes(x=year, y=as.numeric(survival))) + 
      geom_col(aes(fill=rx), position = position_stack(reverse = T)) +
      theme_bw() +
      xlab("") +
      ylab("Survival probability (%)") +
      scale_x_discrete(labels = x.labs) +
      scale_y_continuous(limits = c(0, 100), breaks = c(0 , 20, 40, 60, 80, 100)) +
      scale_fill_manual(name = "Treatment", labels = rx.labs, values = rx.colors) +
      theme(axis.title=element_text(size=14),
            axis.text=element_text(size=12, color = 'black'),
            legend.title=element_text(size=14),
            legend.text=element_text(size=12))
  })
  
  output$horm <- renderPlot({
    
    x.labs <- c("Year 10" , "Year 15")
    rx.labs <- c("None", "10yr adj hormone")
    rx.colors <- c("#fb8072", "#4daf4a")
    df2 <- data()
    df2 <- filter(df2, (year=="y15" | year=="y10") & (rx=="g" | rx=="h"))
    ggplot(data=df2, aes(x=year, y=as.numeric(survival))) + 
      geom_col(aes(fill=rx), position = position_stack(reverse = TRUE)) +
      theme_bw() +
      xlab("") +
      ylab("Survival probability (%)") +
      scale_x_discrete(labels = x.labs) +
      scale_y_continuous(limits = c(0, 100), breaks = c(0 , 20, 40, 60, 80, 100)) +
      scale_fill_manual(name = "Treatment", labels = rx.labs, values = rx.colors) +
      theme(axis.title=element_text(size=14),
            axis.text=element_text(size=12, color = 'black'),
            legend.title=element_text(size=14),
            legend.text=element_text(size=12))
  })
}

shinyApp(ui = ui, server = server)

