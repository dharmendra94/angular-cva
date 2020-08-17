

export interface RegularMarketTime {
    raw: number;
    fmt: string;
}

export interface RegularMarketChangePercent {
    raw: number;
    fmt: string;
}

export interface RegularMarketPreviousClose {
    raw: number;
    fmt: string;
}

export interface RegularMarketChange {
    raw: number;
    fmt: string;
}

export interface RegularMarketPrice {
    raw: number;
    fmt: string;
}

export interface Result {
    fullExchangeName: string;
    symbol: string;
    gmtOffSetMilliseconds: number;
    headSymbolAsString: string;
    language: string;
    regularMarketTime: RegularMarketTime;
    regularMarketChangePercent: RegularMarketChangePercent;
    quoteType: string;
    headSymbol: boolean;
    tradeable: boolean;
    contractSymbol: boolean;
    regularMarketPreviousClose: RegularMarketPreviousClose;
    exchangeTimezoneName: string;
    regularMarketChange: RegularMarketChange;
    firstTradeDateMilliseconds: any;
    exchangeDataDelayedBy: number;
    exchangeTimezoneShortName: string;
    regularMarketPrice: RegularMarketPrice;
    marketState: string;
    market: string;
    sourceInterval: number;
    exchange: string;
    shortName: string;
    region: string;
    triggerable: boolean;
    currency: string;
    quoteSourceName: string;
    priceHint?: number;
    longName: string;
}

export interface MarketSummaryResponse {
    result: Result[];
    error?: any;
}

export interface RootObject {
    marketSummaryResponse: MarketSummaryResponse;
}


