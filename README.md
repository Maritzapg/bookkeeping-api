# Task REST API

This is a simple REST API to be called by a bot while executing tasks. It runs on port 3001 by default but may be configured in the environment.

## Requirements

    node
    typescript

## Install

    npm install

## Run the app

    npm run start

# REST API

## Process Invoice

### Request

`GET /tasks/processInvoice`

    curl --location 'http://localhost:3001/tasks/processInvoice'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Categorize Transactions

### Request

`GET /tasks/categorizeTransactions`

    curl --location 'http://localhost:3001/tasks/categorizeTransactions'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Extract Statement Data

### Request

`GET /tasks/extractStatementData`

    curl --location 'http://localhost:3001/tasks/extractStatementData'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Amoritize Loan Payments

### Request

`GET /tasks/amoritizeLoanPayments`

    curl --location 'http://localhost:3001/tasks/amoritizeLoanPayments'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Depreciate Fixed Assets

### Request

`GET /tasks/depreciateFixedAssets`

    curl --location 'http://localhost:3001/tasks/depreciateFixedAssets'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Calculate Payroll Allocations

### Request

`GET /tasks/calculatePayrollAllocations`

    curl --location 'http://localhost:3001/tasks/calculatePayrollAllocations'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Month End Report

### Request

`GET /tasks/monthEndReport`

    curl --location 'http://localhost:3001/tasks/monthEndReport'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Audit Discrepancies

### Request

`GET /tasks/auditDscrepancies`

    curl --location 'http://localhost:3001/tasks/auditDiscrepancies'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Close Books

### Request

`GET /tasks/closeBooks`

    curl --location 'http://localhost:3001/tasks/closeBooks'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```

## Reconciliation

### Request

`GET /tasks/reconciliation`

    curl --location 'http://localhost:3001/tasks/reconciliation'

### Response

```
{
    result: string;
    duration: number;
    id: number;
}
```
