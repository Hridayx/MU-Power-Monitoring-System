# System Overview

## Architecture

The system uses a cloud-native serverless architecture for scalability and reliability.

### Data Flow

```
IoT Sensors → Cloud Platform → Data Processing → ML Inference → Web Dashboard
```

**Process:**
1. Sensors capture electrical parameters every 5 minutes
2. Data transmitted to cloud storage
3. Automated feature engineering pipeline
4. ML models generate forecasts on-demand
5. Web application displays results

---

## Technology Stack

**Infrastructure**: AWS Serverless  
**Frontend**: React, TypeScript, Vite  
**ML**: PyTorch, Transformer models, RNN  
**Processing**: Python, Pandas, NumPy  

---

## System Components

### Data Collection
- Frequency: 5-minute intervals
- Parameters: Voltage, Current, Power, Energy

### Feature Engineering
- Derived features
- Rolling statistics, lag values, time encodings
- Automated pipeline

### ML Models
**Forecasting:**
- Transformer-based (1-hour)
- RNN-based (3-hour)

**Anomaly Detection:**
- XGradient boosting classifier

### Web Application
- Real-time dashboard
- Interactive charts
- Dark mode support
- Mobile responsive

---


---
