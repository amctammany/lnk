import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
};
/** Batch payloads from prisma. */
export type BatchPayload = {
    __typename?: 'BatchPayload';
    /** Prisma Batch Payload */
    count: Scalars['Int']['output'];
};
export type FloatFieldUpdateOperationsInput = {
    decrement?: InputMaybe<Scalars['Float']['input']>;
    divide?: InputMaybe<Scalars['Float']['input']>;
    increment?: InputMaybe<Scalars['Float']['input']>;
    multiply?: InputMaybe<Scalars['Float']['input']>;
    set?: InputMaybe<Scalars['Float']['input']>;
};
export type FloatFilter = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    gt?: InputMaybe<Scalars['Float']['input']>;
    gte?: InputMaybe<Scalars['Float']['input']>;
    in?: InputMaybe<Array<Scalars['Float']['input']>>;
    lt?: InputMaybe<Scalars['Float']['input']>;
    lte?: InputMaybe<Scalars['Float']['input']>;
    not?: InputMaybe<NestedFloatFilter>;
    notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};
export type FloatWithAggregatesFilter = {
    _avg?: InputMaybe<NestedFloatFilter>;
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedFloatFilter>;
    _min?: InputMaybe<NestedFloatFilter>;
    _sum?: InputMaybe<NestedFloatFilter>;
    equals?: InputMaybe<Scalars['Float']['input']>;
    gt?: InputMaybe<Scalars['Float']['input']>;
    gte?: InputMaybe<Scalars['Float']['input']>;
    in?: InputMaybe<Array<Scalars['Float']['input']>>;
    lt?: InputMaybe<Scalars['Float']['input']>;
    lte?: InputMaybe<Scalars['Float']['input']>;
    not?: InputMaybe<NestedFloatWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};
export type Hop = {
    __typename?: 'Hop';
    alpha: Scalars['Float']['output'];
    alphaHigh: Scalars['Float']['output'];
    alphaLow: Scalars['Float']['output'];
    beta: Scalars['Float']['output'];
    betaHigh: Scalars['Float']['output'];
    betaLow: Scalars['Float']['output'];
    caryophyllene: Scalars['Float']['output'];
    caryophylleneHigh: Scalars['Float']['output'];
    caryophylleneLow: Scalars['Float']['output'];
    cohumulone: Scalars['Float']['output'];
    cohumuloneHigh: Scalars['Float']['output'];
    cohumuloneLow: Scalars['Float']['output'];
    country: Scalars['String']['output'];
    description: Scalars['String']['output'];
    farnesene: Scalars['Float']['output'];
    farneseneHigh: Scalars['Float']['output'];
    farneseneLow: Scalars['Float']['output'];
    flavor: Scalars['String']['output'];
    humulene: Scalars['Float']['output'];
    humuleneHigh: Scalars['Float']['output'];
    humuleneLow: Scalars['Float']['output'];
    id: Scalars['ID']['output'];
    myrcene: Scalars['Float']['output'];
    myrceneHigh: Scalars['Float']['output'];
    myrceneLow: Scalars['Float']['output'];
    name: Scalars['String']['output'];
    notes: Scalars['String']['output'];
    purpose: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    styles: Array<Scalars['String']['output']>;
    totalOil: Scalars['Float']['output'];
    totalOilHigh: Scalars['Float']['output'];
    totalOilLow: Scalars['Float']['output'];
};
export type HopAvgOrderByAggregateInput = {
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export type HopCountOrderByAggregateInput = {
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    country?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    flavor?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    notes?: InputMaybe<SortOrder>;
    purpose?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    styles?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export type HopCreateInput = {
    alpha: Scalars['Float']['input'];
    alphaHigh: Scalars['Float']['input'];
    alphaLow: Scalars['Float']['input'];
    beta: Scalars['Float']['input'];
    betaHigh: Scalars['Float']['input'];
    betaLow: Scalars['Float']['input'];
    caryophyllene: Scalars['Float']['input'];
    caryophylleneHigh: Scalars['Float']['input'];
    caryophylleneLow: Scalars['Float']['input'];
    cohumulone: Scalars['Float']['input'];
    cohumuloneHigh: Scalars['Float']['input'];
    cohumuloneLow: Scalars['Float']['input'];
    country: Scalars['String']['input'];
    description: Scalars['String']['input'];
    farnesene: Scalars['Float']['input'];
    farneseneHigh: Scalars['Float']['input'];
    farneseneLow: Scalars['Float']['input'];
    flavor: Scalars['String']['input'];
    humulene: Scalars['Float']['input'];
    humuleneHigh: Scalars['Float']['input'];
    humuleneLow: Scalars['Float']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    myrcene: Scalars['Float']['input'];
    myrceneHigh: Scalars['Float']['input'];
    myrceneLow: Scalars['Float']['input'];
    name: Scalars['String']['input'];
    notes: Scalars['String']['input'];
    purpose: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    styles?: InputMaybe<Array<Scalars['String']['input']>>;
    totalOil: Scalars['Float']['input'];
    totalOilHigh: Scalars['Float']['input'];
    totalOilLow: Scalars['Float']['input'];
};
export type HopCreateManyInput = {
    alpha: Scalars['Float']['input'];
    alphaHigh: Scalars['Float']['input'];
    alphaLow: Scalars['Float']['input'];
    beta: Scalars['Float']['input'];
    betaHigh: Scalars['Float']['input'];
    betaLow: Scalars['Float']['input'];
    caryophyllene: Scalars['Float']['input'];
    caryophylleneHigh: Scalars['Float']['input'];
    caryophylleneLow: Scalars['Float']['input'];
    cohumulone: Scalars['Float']['input'];
    cohumuloneHigh: Scalars['Float']['input'];
    cohumuloneLow: Scalars['Float']['input'];
    country: Scalars['String']['input'];
    description: Scalars['String']['input'];
    farnesene: Scalars['Float']['input'];
    farneseneHigh: Scalars['Float']['input'];
    farneseneLow: Scalars['Float']['input'];
    flavor: Scalars['String']['input'];
    humulene: Scalars['Float']['input'];
    humuleneHigh: Scalars['Float']['input'];
    humuleneLow: Scalars['Float']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    myrcene: Scalars['Float']['input'];
    myrceneHigh: Scalars['Float']['input'];
    myrceneLow: Scalars['Float']['input'];
    name: Scalars['String']['input'];
    notes: Scalars['String']['input'];
    purpose: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    styles?: InputMaybe<Array<Scalars['String']['input']>>;
    totalOil: Scalars['Float']['input'];
    totalOilHigh: Scalars['Float']['input'];
    totalOilLow: Scalars['Float']['input'];
};
export type HopCreatestylesInput = {
    set: Array<Scalars['String']['input']>;
};
export type HopMaxOrderByAggregateInput = {
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    country?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    flavor?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    notes?: InputMaybe<SortOrder>;
    purpose?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export type HopMinOrderByAggregateInput = {
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    country?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    flavor?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    notes?: InputMaybe<SortOrder>;
    purpose?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export type HopOrderByWithAggregationInput = {
    _avg?: InputMaybe<HopAvgOrderByAggregateInput>;
    _count?: InputMaybe<HopCountOrderByAggregateInput>;
    _max?: InputMaybe<HopMaxOrderByAggregateInput>;
    _min?: InputMaybe<HopMinOrderByAggregateInput>;
    _sum?: InputMaybe<HopSumOrderByAggregateInput>;
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    country?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    flavor?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    notes?: InputMaybe<SortOrder>;
    purpose?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    styles?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export type HopOrderByWithRelationInput = {
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    country?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    flavor?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    notes?: InputMaybe<SortOrder>;
    purpose?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    styles?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export declare const enum HopScalarFieldEnum {
    Alpha = "alpha",
    AlphaHigh = "alphaHigh",
    AlphaLow = "alphaLow",
    Beta = "beta",
    BetaHigh = "betaHigh",
    BetaLow = "betaLow",
    Caryophyllene = "caryophyllene",
    CaryophylleneHigh = "caryophylleneHigh",
    CaryophylleneLow = "caryophylleneLow",
    Cohumulone = "cohumulone",
    CohumuloneHigh = "cohumuloneHigh",
    CohumuloneLow = "cohumuloneLow",
    Country = "country",
    Description = "description",
    Farnesene = "farnesene",
    FarneseneHigh = "farneseneHigh",
    FarneseneLow = "farneseneLow",
    Flavor = "flavor",
    Humulene = "humulene",
    HumuleneHigh = "humuleneHigh",
    HumuleneLow = "humuleneLow",
    Id = "id",
    Myrcene = "myrcene",
    MyrceneHigh = "myrceneHigh",
    MyrceneLow = "myrceneLow",
    Name = "name",
    Notes = "notes",
    Purpose = "purpose",
    Slug = "slug",
    Styles = "styles",
    TotalOil = "totalOil",
    TotalOilHigh = "totalOilHigh",
    TotalOilLow = "totalOilLow"
}
export type HopScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<HopScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<HopScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<HopScalarWhereWithAggregatesInput>>;
    alpha?: InputMaybe<FloatWithAggregatesFilter>;
    alphaHigh?: InputMaybe<FloatWithAggregatesFilter>;
    alphaLow?: InputMaybe<FloatWithAggregatesFilter>;
    beta?: InputMaybe<FloatWithAggregatesFilter>;
    betaHigh?: InputMaybe<FloatWithAggregatesFilter>;
    betaLow?: InputMaybe<FloatWithAggregatesFilter>;
    caryophyllene?: InputMaybe<FloatWithAggregatesFilter>;
    caryophylleneHigh?: InputMaybe<FloatWithAggregatesFilter>;
    caryophylleneLow?: InputMaybe<FloatWithAggregatesFilter>;
    cohumulone?: InputMaybe<FloatWithAggregatesFilter>;
    cohumuloneHigh?: InputMaybe<FloatWithAggregatesFilter>;
    cohumuloneLow?: InputMaybe<FloatWithAggregatesFilter>;
    country?: InputMaybe<StringWithAggregatesFilter>;
    description?: InputMaybe<StringWithAggregatesFilter>;
    farnesene?: InputMaybe<FloatWithAggregatesFilter>;
    farneseneHigh?: InputMaybe<FloatWithAggregatesFilter>;
    farneseneLow?: InputMaybe<FloatWithAggregatesFilter>;
    flavor?: InputMaybe<StringWithAggregatesFilter>;
    humulene?: InputMaybe<FloatWithAggregatesFilter>;
    humuleneHigh?: InputMaybe<FloatWithAggregatesFilter>;
    humuleneLow?: InputMaybe<FloatWithAggregatesFilter>;
    id?: InputMaybe<StringWithAggregatesFilter>;
    myrcene?: InputMaybe<FloatWithAggregatesFilter>;
    myrceneHigh?: InputMaybe<FloatWithAggregatesFilter>;
    myrceneLow?: InputMaybe<FloatWithAggregatesFilter>;
    name?: InputMaybe<StringWithAggregatesFilter>;
    notes?: InputMaybe<StringWithAggregatesFilter>;
    purpose?: InputMaybe<StringWithAggregatesFilter>;
    slug?: InputMaybe<StringWithAggregatesFilter>;
    styles?: InputMaybe<StringNullableListFilter>;
    totalOil?: InputMaybe<FloatWithAggregatesFilter>;
    totalOilHigh?: InputMaybe<FloatWithAggregatesFilter>;
    totalOilLow?: InputMaybe<FloatWithAggregatesFilter>;
};
export type HopSumOrderByAggregateInput = {
    alpha?: InputMaybe<SortOrder>;
    alphaHigh?: InputMaybe<SortOrder>;
    alphaLow?: InputMaybe<SortOrder>;
    beta?: InputMaybe<SortOrder>;
    betaHigh?: InputMaybe<SortOrder>;
    betaLow?: InputMaybe<SortOrder>;
    caryophyllene?: InputMaybe<SortOrder>;
    caryophylleneHigh?: InputMaybe<SortOrder>;
    caryophylleneLow?: InputMaybe<SortOrder>;
    cohumulone?: InputMaybe<SortOrder>;
    cohumuloneHigh?: InputMaybe<SortOrder>;
    cohumuloneLow?: InputMaybe<SortOrder>;
    farnesene?: InputMaybe<SortOrder>;
    farneseneHigh?: InputMaybe<SortOrder>;
    farneseneLow?: InputMaybe<SortOrder>;
    humulene?: InputMaybe<SortOrder>;
    humuleneHigh?: InputMaybe<SortOrder>;
    humuleneLow?: InputMaybe<SortOrder>;
    myrcene?: InputMaybe<SortOrder>;
    myrceneHigh?: InputMaybe<SortOrder>;
    myrceneLow?: InputMaybe<SortOrder>;
    totalOil?: InputMaybe<SortOrder>;
    totalOilHigh?: InputMaybe<SortOrder>;
    totalOilLow?: InputMaybe<SortOrder>;
};
export type HopUpdateInput = {
    alpha?: InputMaybe<FloatFieldUpdateOperationsInput>;
    alphaHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    alphaLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    beta?: InputMaybe<FloatFieldUpdateOperationsInput>;
    betaHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    betaLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    caryophyllene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    caryophylleneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    caryophylleneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    cohumulone?: InputMaybe<FloatFieldUpdateOperationsInput>;
    cohumuloneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    cohumuloneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    country?: InputMaybe<StringFieldUpdateOperationsInput>;
    description?: InputMaybe<StringFieldUpdateOperationsInput>;
    farnesene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    farneseneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    farneseneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    flavor?: InputMaybe<StringFieldUpdateOperationsInput>;
    humulene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    humuleneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    humuleneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    myrcene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    myrceneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    myrceneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    notes?: InputMaybe<StringFieldUpdateOperationsInput>;
    purpose?: InputMaybe<StringFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
    styles?: InputMaybe<Array<Scalars['String']['input']>>;
    totalOil?: InputMaybe<FloatFieldUpdateOperationsInput>;
    totalOilHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    totalOilLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
};
export type HopUpdateManyMutationInput = {
    alpha?: InputMaybe<FloatFieldUpdateOperationsInput>;
    alphaHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    alphaLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    beta?: InputMaybe<FloatFieldUpdateOperationsInput>;
    betaHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    betaLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    caryophyllene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    caryophylleneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    caryophylleneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    cohumulone?: InputMaybe<FloatFieldUpdateOperationsInput>;
    cohumuloneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    cohumuloneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    country?: InputMaybe<StringFieldUpdateOperationsInput>;
    description?: InputMaybe<StringFieldUpdateOperationsInput>;
    farnesene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    farneseneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    farneseneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    flavor?: InputMaybe<StringFieldUpdateOperationsInput>;
    humulene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    humuleneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    humuleneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    myrcene?: InputMaybe<FloatFieldUpdateOperationsInput>;
    myrceneHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    myrceneLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    notes?: InputMaybe<StringFieldUpdateOperationsInput>;
    purpose?: InputMaybe<StringFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
    styles?: InputMaybe<Array<Scalars['String']['input']>>;
    totalOil?: InputMaybe<FloatFieldUpdateOperationsInput>;
    totalOilHigh?: InputMaybe<FloatFieldUpdateOperationsInput>;
    totalOilLow?: InputMaybe<FloatFieldUpdateOperationsInput>;
};
export type HopUpdatestylesInput = {
    push?: InputMaybe<Array<Scalars['String']['input']>>;
    set?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type HopWhereInput = {
    AND?: InputMaybe<Array<HopWhereInput>>;
    NOT?: InputMaybe<Array<HopWhereInput>>;
    OR?: InputMaybe<Array<HopWhereInput>>;
    alpha?: InputMaybe<FloatFilter>;
    alphaHigh?: InputMaybe<FloatFilter>;
    alphaLow?: InputMaybe<FloatFilter>;
    beta?: InputMaybe<FloatFilter>;
    betaHigh?: InputMaybe<FloatFilter>;
    betaLow?: InputMaybe<FloatFilter>;
    caryophyllene?: InputMaybe<FloatFilter>;
    caryophylleneHigh?: InputMaybe<FloatFilter>;
    caryophylleneLow?: InputMaybe<FloatFilter>;
    cohumulone?: InputMaybe<FloatFilter>;
    cohumuloneHigh?: InputMaybe<FloatFilter>;
    cohumuloneLow?: InputMaybe<FloatFilter>;
    country?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    farnesene?: InputMaybe<FloatFilter>;
    farneseneHigh?: InputMaybe<FloatFilter>;
    farneseneLow?: InputMaybe<FloatFilter>;
    flavor?: InputMaybe<StringFilter>;
    humulene?: InputMaybe<FloatFilter>;
    humuleneHigh?: InputMaybe<FloatFilter>;
    humuleneLow?: InputMaybe<FloatFilter>;
    id?: InputMaybe<StringFilter>;
    myrcene?: InputMaybe<FloatFilter>;
    myrceneHigh?: InputMaybe<FloatFilter>;
    myrceneLow?: InputMaybe<FloatFilter>;
    name?: InputMaybe<StringFilter>;
    notes?: InputMaybe<StringFilter>;
    purpose?: InputMaybe<StringFilter>;
    slug?: InputMaybe<StringFilter>;
    styles?: InputMaybe<StringNullableListFilter>;
    totalOil?: InputMaybe<FloatFilter>;
    totalOilHigh?: InputMaybe<FloatFilter>;
    totalOilLow?: InputMaybe<FloatFilter>;
};
export type HopWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']['input']>;
};
export type Mutation = {
    __typename?: 'Mutation';
    createManyHop: Array<Hop>;
    createManyRecipe: Array<Recipe>;
    createManyUser: Array<User>;
    createOneHop: Hop;
    createOneRecipe: Recipe;
    createOneUser: User;
    deleteManyHop?: Maybe<BatchPayload>;
    deleteManyRecipe?: Maybe<BatchPayload>;
    deleteManyUser?: Maybe<BatchPayload>;
    deleteOneHop?: Maybe<Hop>;
    deleteOneRecipe?: Maybe<Recipe>;
    deleteOneUser?: Maybe<User>;
    updateManyHop: BatchPayload;
    updateManyRecipe: BatchPayload;
    updateManyUser: BatchPayload;
    updateOneHop?: Maybe<Hop>;
    updateOneRecipe?: Maybe<Recipe>;
    updateOneUser?: Maybe<User>;
    upsertOneHop: Hop;
    upsertOneRecipe: Recipe;
    upsertOneUser: User;
};
export type MutationCreateManyHopArgs = {
    data: Array<HopCreateInput>;
};
export type MutationCreateManyRecipeArgs = {
    data: Array<RecipeCreateInput>;
};
export type MutationCreateManyUserArgs = {
    data: Array<UserCreateInput>;
};
export type MutationCreateOneHopArgs = {
    data: HopCreateInput;
};
export type MutationCreateOneRecipeArgs = {
    data: RecipeCreateInput;
};
export type MutationCreateOneUserArgs = {
    data: UserCreateInput;
};
export type MutationDeleteManyHopArgs = {
    where: HopWhereInput;
};
export type MutationDeleteManyRecipeArgs = {
    where: RecipeWhereInput;
};
export type MutationDeleteManyUserArgs = {
    where: UserWhereInput;
};
export type MutationDeleteOneHopArgs = {
    where: HopWhereUniqueInput;
};
export type MutationDeleteOneRecipeArgs = {
    where: RecipeWhereUniqueInput;
};
export type MutationDeleteOneUserArgs = {
    where: UserWhereUniqueInput;
};
export type MutationUpdateManyHopArgs = {
    data: HopUpdateManyMutationInput;
    where?: InputMaybe<HopWhereInput>;
};
export type MutationUpdateManyRecipeArgs = {
    data: RecipeUpdateManyMutationInput;
    where?: InputMaybe<RecipeWhereInput>;
};
export type MutationUpdateManyUserArgs = {
    data: UserUpdateManyMutationInput;
    where?: InputMaybe<UserWhereInput>;
};
export type MutationUpdateOneHopArgs = {
    data: HopUpdateInput;
    where: HopWhereUniqueInput;
};
export type MutationUpdateOneRecipeArgs = {
    data: RecipeUpdateInput;
    where: RecipeWhereUniqueInput;
};
export type MutationUpdateOneUserArgs = {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
};
export type MutationUpsertOneHopArgs = {
    create: HopCreateInput;
    update: HopUpdateInput;
    where: HopWhereUniqueInput;
};
export type MutationUpsertOneRecipeArgs = {
    create: RecipeCreateInput;
    update: RecipeUpdateInput;
    where: RecipeWhereUniqueInput;
};
export type MutationUpsertOneUserArgs = {
    create: UserCreateInput;
    update: UserUpdateInput;
    where: UserWhereUniqueInput;
};
export type NestedFloatFilter = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    gt?: InputMaybe<Scalars['Float']['input']>;
    gte?: InputMaybe<Scalars['Float']['input']>;
    in?: InputMaybe<Array<Scalars['Float']['input']>>;
    lt?: InputMaybe<Scalars['Float']['input']>;
    lte?: InputMaybe<Scalars['Float']['input']>;
    not?: InputMaybe<NestedFloatFilter>;
    notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};
export type NestedFloatWithAggregatesFilter = {
    _avg?: InputMaybe<NestedFloatFilter>;
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedFloatFilter>;
    _min?: InputMaybe<NestedFloatFilter>;
    _sum?: InputMaybe<NestedFloatFilter>;
    equals?: InputMaybe<Scalars['Float']['input']>;
    gt?: InputMaybe<Scalars['Float']['input']>;
    gte?: InputMaybe<Scalars['Float']['input']>;
    in?: InputMaybe<Array<Scalars['Float']['input']>>;
    lt?: InputMaybe<Scalars['Float']['input']>;
    lte?: InputMaybe<Scalars['Float']['input']>;
    not?: InputMaybe<NestedFloatWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};
export type NestedIntFilter = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    gt?: InputMaybe<Scalars['Int']['input']>;
    gte?: InputMaybe<Scalars['Int']['input']>;
    in?: InputMaybe<Array<Scalars['Int']['input']>>;
    lt?: InputMaybe<Scalars['Int']['input']>;
    lte?: InputMaybe<Scalars['Int']['input']>;
    not?: InputMaybe<NestedIntFilter>;
    notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};
export type NestedStringFilter = {
    contains?: InputMaybe<Scalars['String']['input']>;
    endsWith?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    gt?: InputMaybe<Scalars['String']['input']>;
    gte?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<Scalars['String']['input']>>;
    lt?: InputMaybe<Scalars['String']['input']>;
    lte?: InputMaybe<Scalars['String']['input']>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWith?: InputMaybe<Scalars['String']['input']>;
};
export type NestedStringWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedStringFilter>;
    _min?: InputMaybe<NestedStringFilter>;
    contains?: InputMaybe<Scalars['String']['input']>;
    endsWith?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    gt?: InputMaybe<Scalars['String']['input']>;
    gte?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<Scalars['String']['input']>>;
    lt?: InputMaybe<Scalars['String']['input']>;
    lte?: InputMaybe<Scalars['String']['input']>;
    not?: InputMaybe<NestedStringWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWith?: InputMaybe<Scalars['String']['input']>;
};
export type Query = {
    __typename?: 'Query';
    countHop: Scalars['Int']['output'];
    countRecipe: Scalars['Int']['output'];
    countUser: Scalars['Int']['output'];
    findFirstHop?: Maybe<Hop>;
    findFirstRecipe?: Maybe<Recipe>;
    findFirstUser?: Maybe<User>;
    findManyHop: Array<Hop>;
    findManyRecipe: Array<Recipe>;
    findManyUser: Array<User>;
    findUniqueHop?: Maybe<Hop>;
    findUniqueRecipe?: Maybe<Recipe>;
    findUniqueUser?: Maybe<User>;
};
export type QueryCountHopArgs = {
    cursor?: InputMaybe<HopWhereUniqueInput>;
    distinct?: InputMaybe<Array<HopScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<HopOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<HopWhereInput>;
};
export type QueryCountRecipeArgs = {
    cursor?: InputMaybe<RecipeWhereUniqueInput>;
    distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<RecipeWhereInput>;
};
export type QueryCountUserArgs = {
    cursor?: InputMaybe<UserWhereUniqueInput>;
    distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<UserWhereInput>;
};
export type QueryFindFirstHopArgs = {
    cursor?: InputMaybe<HopWhereUniqueInput>;
    distinct?: InputMaybe<Array<HopScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<HopOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<HopWhereInput>;
};
export type QueryFindFirstRecipeArgs = {
    cursor?: InputMaybe<RecipeWhereUniqueInput>;
    distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<RecipeWhereInput>;
};
export type QueryFindFirstUserArgs = {
    cursor?: InputMaybe<UserWhereUniqueInput>;
    distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<UserWhereInput>;
};
export type QueryFindManyHopArgs = {
    cursor?: InputMaybe<HopWhereUniqueInput>;
    distinct?: InputMaybe<Array<HopScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<HopOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<HopWhereInput>;
};
export type QueryFindManyRecipeArgs = {
    cursor?: InputMaybe<RecipeWhereUniqueInput>;
    distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<RecipeWhereInput>;
};
export type QueryFindManyUserArgs = {
    cursor?: InputMaybe<UserWhereUniqueInput>;
    distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<UserWhereInput>;
};
export type QueryFindUniqueHopArgs = {
    where: HopWhereUniqueInput;
};
export type QueryFindUniqueRecipeArgs = {
    where: RecipeWhereUniqueInput;
};
export type QueryFindUniqueUserArgs = {
    where: UserWhereUniqueInput;
};
export declare const enum QueryMode {
    Default = "default",
    Insensitive = "insensitive"
}
export type Recipe = {
    __typename?: 'Recipe';
    author: User;
    authorId: Scalars['String']['output'];
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
};
export type RecipeCountOrderByAggregateInput = {
    authorId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
};
export type RecipeCreateInput = {
    author: UserCreateNestedOneWithoutRecipesInput;
    description: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    slug: Scalars['String']['input'];
};
export type RecipeCreateManyAuthorInput = {
    description: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    slug: Scalars['String']['input'];
};
export type RecipeCreateManyAuthorInputEnvelope = {
    data: Array<RecipeCreateManyAuthorInput>;
};
export type RecipeCreateManyInput = {
    authorId: Scalars['String']['input'];
    description: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    slug: Scalars['String']['input'];
};
export type RecipeCreateNestedManyWithoutAuthorInput = {
    connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAuthorInput>>;
    create?: InputMaybe<Array<RecipeCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<RecipeCreateManyAuthorInputEnvelope>;
};
export type RecipeCreateOrConnectWithoutAuthorInput = {
    create: RecipeCreateWithoutAuthorInput;
    where: RecipeWhereUniqueInput;
};
export type RecipeCreateWithoutAuthorInput = {
    description: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    slug: Scalars['String']['input'];
};
export type RecipeListRelationFilter = {
    every?: InputMaybe<RecipeWhereInput>;
    none?: InputMaybe<RecipeWhereInput>;
    some?: InputMaybe<RecipeWhereInput>;
};
export type RecipeMaxOrderByAggregateInput = {
    authorId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
};
export type RecipeMinOrderByAggregateInput = {
    authorId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
};
export type RecipeOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>;
};
export type RecipeOrderByWithAggregationInput = {
    _count?: InputMaybe<RecipeCountOrderByAggregateInput>;
    _max?: InputMaybe<RecipeMaxOrderByAggregateInput>;
    _min?: InputMaybe<RecipeMinOrderByAggregateInput>;
    authorId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
};
export type RecipeOrderByWithRelationInput = {
    author?: InputMaybe<UserOrderByWithRelationInput>;
    authorId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
};
export declare const enum RecipeScalarFieldEnum {
    AuthorId = "authorId",
    Description = "description",
    Id = "id",
    Name = "name",
    Slug = "slug"
}
export type RecipeScalarWhereInput = {
    AND?: InputMaybe<Array<RecipeScalarWhereInput>>;
    NOT?: InputMaybe<Array<RecipeScalarWhereInput>>;
    OR?: InputMaybe<Array<RecipeScalarWhereInput>>;
    authorId?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    slug?: InputMaybe<StringFilter>;
};
export type RecipeScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
    authorId?: InputMaybe<StringWithAggregatesFilter>;
    description?: InputMaybe<StringWithAggregatesFilter>;
    id?: InputMaybe<StringWithAggregatesFilter>;
    name?: InputMaybe<StringWithAggregatesFilter>;
    slug?: InputMaybe<StringWithAggregatesFilter>;
};
export type RecipeUpdateInput = {
    author?: InputMaybe<UserUpdateOneRequiredWithoutRecipesNestedInput>;
    description?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};
export type RecipeUpdateManyMutationInput = {
    description?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};
export type RecipeUpdateManyWithWhereWithoutAuthorInput = {
    data: RecipeUpdateManyMutationInput;
    where: RecipeScalarWhereInput;
};
export type RecipeUpdateManyWithoutAuthorNestedInput = {
    connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAuthorInput>>;
    create?: InputMaybe<Array<RecipeCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<RecipeCreateManyAuthorInputEnvelope>;
    delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
    deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
    disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
    set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
    update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutAuthorInput>>;
    updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutAuthorInput>>;
    upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutAuthorInput>>;
};
export type RecipeUpdateWithWhereUniqueWithoutAuthorInput = {
    data: RecipeUpdateWithoutAuthorInput;
    where: RecipeWhereUniqueInput;
};
export type RecipeUpdateWithoutAuthorInput = {
    description?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};
export type RecipeUpsertWithWhereUniqueWithoutAuthorInput = {
    create: RecipeCreateWithoutAuthorInput;
    update: RecipeUpdateWithoutAuthorInput;
    where: RecipeWhereUniqueInput;
};
export type RecipeWhereInput = {
    AND?: InputMaybe<Array<RecipeWhereInput>>;
    NOT?: InputMaybe<Array<RecipeWhereInput>>;
    OR?: InputMaybe<Array<RecipeWhereInput>>;
    author?: InputMaybe<UserWhereInput>;
    authorId?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    slug?: InputMaybe<StringFilter>;
};
export type RecipeWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']['input']>;
};
export declare const enum SortOrder {
    Asc = "asc",
    Desc = "desc"
}
export type StringFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['String']['input']>;
};
export type StringFilter = {
    contains?: InputMaybe<Scalars['String']['input']>;
    endsWith?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    gt?: InputMaybe<Scalars['String']['input']>;
    gte?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<Scalars['String']['input']>>;
    lt?: InputMaybe<Scalars['String']['input']>;
    lte?: InputMaybe<Scalars['String']['input']>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWith?: InputMaybe<Scalars['String']['input']>;
};
export type StringNullableListFilter = {
    equals?: InputMaybe<Array<Scalars['String']['input']>>;
    has?: InputMaybe<Scalars['String']['input']>;
    hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
    hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
    isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};
export type StringWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedStringFilter>;
    _min?: InputMaybe<NestedStringFilter>;
    contains?: InputMaybe<Scalars['String']['input']>;
    endsWith?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    gt?: InputMaybe<Scalars['String']['input']>;
    gte?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<Scalars['String']['input']>>;
    lt?: InputMaybe<Scalars['String']['input']>;
    lte?: InputMaybe<Scalars['String']['input']>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars['String']['input']>>;
    startsWith?: InputMaybe<Scalars['String']['input']>;
};
export type User = {
    __typename?: 'User';
    email: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    recipes: Array<Recipe>;
    username: Scalars['String']['output'];
};
export type UserRecipesArgs = {
    cursor?: InputMaybe<RecipeWhereUniqueInput>;
    distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
    orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    take?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<RecipeWhereInput>;
};
export type UserCountOrderByAggregateInput = {
    email?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    username?: InputMaybe<SortOrder>;
};
export type UserCreateInput = {
    email: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    recipes?: InputMaybe<RecipeCreateNestedManyWithoutAuthorInput>;
    username: Scalars['String']['input'];
};
export type UserCreateManyInput = {
    email: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    username: Scalars['String']['input'];
};
export type UserCreateNestedOneWithoutRecipesInput = {
    connect?: InputMaybe<UserWhereUniqueInput>;
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRecipesInput>;
    create?: InputMaybe<UserCreateWithoutRecipesInput>;
};
export type UserCreateOrConnectWithoutRecipesInput = {
    create: UserCreateWithoutRecipesInput;
    where: UserWhereUniqueInput;
};
export type UserCreateWithoutRecipesInput = {
    email: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
    username: Scalars['String']['input'];
};
export type UserMaxOrderByAggregateInput = {
    email?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    username?: InputMaybe<SortOrder>;
};
export type UserMinOrderByAggregateInput = {
    email?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    username?: InputMaybe<SortOrder>;
};
export type UserOrderByWithAggregationInput = {
    _count?: InputMaybe<UserCountOrderByAggregateInput>;
    _max?: InputMaybe<UserMaxOrderByAggregateInput>;
    _min?: InputMaybe<UserMinOrderByAggregateInput>;
    email?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    username?: InputMaybe<SortOrder>;
};
export type UserOrderByWithRelationInput = {
    email?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    recipes?: InputMaybe<RecipeOrderByRelationAggregateInput>;
    username?: InputMaybe<SortOrder>;
};
export type UserRelationFilter = {
    is?: InputMaybe<UserWhereInput>;
    isNot?: InputMaybe<UserWhereInput>;
};
export declare const enum UserScalarFieldEnum {
    Email = "email",
    Id = "id",
    Name = "name",
    Username = "username"
}
export type UserScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
    email?: InputMaybe<StringWithAggregatesFilter>;
    id?: InputMaybe<StringWithAggregatesFilter>;
    name?: InputMaybe<StringWithAggregatesFilter>;
    username?: InputMaybe<StringWithAggregatesFilter>;
};
export type UserUpdateInput = {
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    recipes?: InputMaybe<RecipeUpdateManyWithoutAuthorNestedInput>;
    username?: InputMaybe<StringFieldUpdateOperationsInput>;
};
export type UserUpdateManyMutationInput = {
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    username?: InputMaybe<StringFieldUpdateOperationsInput>;
};
export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    connect?: InputMaybe<UserWhereUniqueInput>;
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRecipesInput>;
    create?: InputMaybe<UserCreateWithoutRecipesInput>;
    update?: InputMaybe<UserUpdateWithoutRecipesInput>;
    upsert?: InputMaybe<UserUpsertWithoutRecipesInput>;
};
export type UserUpdateWithoutRecipesInput = {
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    username?: InputMaybe<StringFieldUpdateOperationsInput>;
};
export type UserUpsertWithoutRecipesInput = {
    create: UserCreateWithoutRecipesInput;
    update: UserUpdateWithoutRecipesInput;
};
export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>;
    NOT?: InputMaybe<Array<UserWhereInput>>;
    OR?: InputMaybe<Array<UserWhereInput>>;
    email?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    recipes?: InputMaybe<RecipeListRelationFilter>;
    username?: InputMaybe<StringFilter>;
};
export type UserWhereUniqueInput = {
    id?: InputMaybe<Scalars['String']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    BatchPayload: ResolverTypeWrapper<BatchPayload>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
    FloatFilter: FloatFilter;
    FloatWithAggregatesFilter: FloatWithAggregatesFilter;
    Hop: ResolverTypeWrapper<Hop>;
    HopAvgOrderByAggregateInput: HopAvgOrderByAggregateInput;
    HopCountOrderByAggregateInput: HopCountOrderByAggregateInput;
    HopCreateInput: HopCreateInput;
    HopCreateManyInput: HopCreateManyInput;
    HopCreatestylesInput: HopCreatestylesInput;
    HopMaxOrderByAggregateInput: HopMaxOrderByAggregateInput;
    HopMinOrderByAggregateInput: HopMinOrderByAggregateInput;
    HopOrderByWithAggregationInput: HopOrderByWithAggregationInput;
    HopOrderByWithRelationInput: HopOrderByWithRelationInput;
    HopScalarFieldEnum: HopScalarFieldEnum;
    HopScalarWhereWithAggregatesInput: HopScalarWhereWithAggregatesInput;
    HopSumOrderByAggregateInput: HopSumOrderByAggregateInput;
    HopUpdateInput: HopUpdateInput;
    HopUpdateManyMutationInput: HopUpdateManyMutationInput;
    HopUpdatestylesInput: HopUpdatestylesInput;
    HopWhereInput: HopWhereInput;
    HopWhereUniqueInput: HopWhereUniqueInput;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Mutation: ResolverTypeWrapper<{}>;
    NestedFloatFilter: NestedFloatFilter;
    NestedFloatWithAggregatesFilter: NestedFloatWithAggregatesFilter;
    NestedIntFilter: NestedIntFilter;
    NestedStringFilter: NestedStringFilter;
    NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
    Query: ResolverTypeWrapper<{}>;
    QueryMode: QueryMode;
    Recipe: ResolverTypeWrapper<Recipe>;
    RecipeCountOrderByAggregateInput: RecipeCountOrderByAggregateInput;
    RecipeCreateInput: RecipeCreateInput;
    RecipeCreateManyAuthorInput: RecipeCreateManyAuthorInput;
    RecipeCreateManyAuthorInputEnvelope: RecipeCreateManyAuthorInputEnvelope;
    RecipeCreateManyInput: RecipeCreateManyInput;
    RecipeCreateNestedManyWithoutAuthorInput: RecipeCreateNestedManyWithoutAuthorInput;
    RecipeCreateOrConnectWithoutAuthorInput: RecipeCreateOrConnectWithoutAuthorInput;
    RecipeCreateWithoutAuthorInput: RecipeCreateWithoutAuthorInput;
    RecipeListRelationFilter: RecipeListRelationFilter;
    RecipeMaxOrderByAggregateInput: RecipeMaxOrderByAggregateInput;
    RecipeMinOrderByAggregateInput: RecipeMinOrderByAggregateInput;
    RecipeOrderByRelationAggregateInput: RecipeOrderByRelationAggregateInput;
    RecipeOrderByWithAggregationInput: RecipeOrderByWithAggregationInput;
    RecipeOrderByWithRelationInput: RecipeOrderByWithRelationInput;
    RecipeScalarFieldEnum: RecipeScalarFieldEnum;
    RecipeScalarWhereInput: RecipeScalarWhereInput;
    RecipeScalarWhereWithAggregatesInput: RecipeScalarWhereWithAggregatesInput;
    RecipeUpdateInput: RecipeUpdateInput;
    RecipeUpdateManyMutationInput: RecipeUpdateManyMutationInput;
    RecipeUpdateManyWithWhereWithoutAuthorInput: RecipeUpdateManyWithWhereWithoutAuthorInput;
    RecipeUpdateManyWithoutAuthorNestedInput: RecipeUpdateManyWithoutAuthorNestedInput;
    RecipeUpdateWithWhereUniqueWithoutAuthorInput: RecipeUpdateWithWhereUniqueWithoutAuthorInput;
    RecipeUpdateWithoutAuthorInput: RecipeUpdateWithoutAuthorInput;
    RecipeUpsertWithWhereUniqueWithoutAuthorInput: RecipeUpsertWithWhereUniqueWithoutAuthorInput;
    RecipeWhereInput: RecipeWhereInput;
    RecipeWhereUniqueInput: RecipeWhereUniqueInput;
    SortOrder: SortOrder;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
    StringFilter: StringFilter;
    StringNullableListFilter: StringNullableListFilter;
    StringWithAggregatesFilter: StringWithAggregatesFilter;
    User: ResolverTypeWrapper<User>;
    UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
    UserCreateInput: UserCreateInput;
    UserCreateManyInput: UserCreateManyInput;
    UserCreateNestedOneWithoutRecipesInput: UserCreateNestedOneWithoutRecipesInput;
    UserCreateOrConnectWithoutRecipesInput: UserCreateOrConnectWithoutRecipesInput;
    UserCreateWithoutRecipesInput: UserCreateWithoutRecipesInput;
    UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
    UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
    UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
    UserOrderByWithRelationInput: UserOrderByWithRelationInput;
    UserRelationFilter: UserRelationFilter;
    UserScalarFieldEnum: UserScalarFieldEnum;
    UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
    UserUpdateInput: UserUpdateInput;
    UserUpdateManyMutationInput: UserUpdateManyMutationInput;
    UserUpdateOneRequiredWithoutRecipesNestedInput: UserUpdateOneRequiredWithoutRecipesNestedInput;
    UserUpdateWithoutRecipesInput: UserUpdateWithoutRecipesInput;
    UserUpsertWithoutRecipesInput: UserUpsertWithoutRecipesInput;
    UserWhereInput: UserWhereInput;
    UserWhereUniqueInput: UserWhereUniqueInput;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    BatchPayload: BatchPayload;
    Boolean: Scalars['Boolean']['output'];
    Float: Scalars['Float']['output'];
    FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
    FloatFilter: FloatFilter;
    FloatWithAggregatesFilter: FloatWithAggregatesFilter;
    Hop: Hop;
    HopAvgOrderByAggregateInput: HopAvgOrderByAggregateInput;
    HopCountOrderByAggregateInput: HopCountOrderByAggregateInput;
    HopCreateInput: HopCreateInput;
    HopCreateManyInput: HopCreateManyInput;
    HopCreatestylesInput: HopCreatestylesInput;
    HopMaxOrderByAggregateInput: HopMaxOrderByAggregateInput;
    HopMinOrderByAggregateInput: HopMinOrderByAggregateInput;
    HopOrderByWithAggregationInput: HopOrderByWithAggregationInput;
    HopOrderByWithRelationInput: HopOrderByWithRelationInput;
    HopScalarWhereWithAggregatesInput: HopScalarWhereWithAggregatesInput;
    HopSumOrderByAggregateInput: HopSumOrderByAggregateInput;
    HopUpdateInput: HopUpdateInput;
    HopUpdateManyMutationInput: HopUpdateManyMutationInput;
    HopUpdatestylesInput: HopUpdatestylesInput;
    HopWhereInput: HopWhereInput;
    HopWhereUniqueInput: HopWhereUniqueInput;
    ID: Scalars['ID']['output'];
    Int: Scalars['Int']['output'];
    Mutation: {};
    NestedFloatFilter: NestedFloatFilter;
    NestedFloatWithAggregatesFilter: NestedFloatWithAggregatesFilter;
    NestedIntFilter: NestedIntFilter;
    NestedStringFilter: NestedStringFilter;
    NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
    Query: {};
    Recipe: Recipe;
    RecipeCountOrderByAggregateInput: RecipeCountOrderByAggregateInput;
    RecipeCreateInput: RecipeCreateInput;
    RecipeCreateManyAuthorInput: RecipeCreateManyAuthorInput;
    RecipeCreateManyAuthorInputEnvelope: RecipeCreateManyAuthorInputEnvelope;
    RecipeCreateManyInput: RecipeCreateManyInput;
    RecipeCreateNestedManyWithoutAuthorInput: RecipeCreateNestedManyWithoutAuthorInput;
    RecipeCreateOrConnectWithoutAuthorInput: RecipeCreateOrConnectWithoutAuthorInput;
    RecipeCreateWithoutAuthorInput: RecipeCreateWithoutAuthorInput;
    RecipeListRelationFilter: RecipeListRelationFilter;
    RecipeMaxOrderByAggregateInput: RecipeMaxOrderByAggregateInput;
    RecipeMinOrderByAggregateInput: RecipeMinOrderByAggregateInput;
    RecipeOrderByRelationAggregateInput: RecipeOrderByRelationAggregateInput;
    RecipeOrderByWithAggregationInput: RecipeOrderByWithAggregationInput;
    RecipeOrderByWithRelationInput: RecipeOrderByWithRelationInput;
    RecipeScalarWhereInput: RecipeScalarWhereInput;
    RecipeScalarWhereWithAggregatesInput: RecipeScalarWhereWithAggregatesInput;
    RecipeUpdateInput: RecipeUpdateInput;
    RecipeUpdateManyMutationInput: RecipeUpdateManyMutationInput;
    RecipeUpdateManyWithWhereWithoutAuthorInput: RecipeUpdateManyWithWhereWithoutAuthorInput;
    RecipeUpdateManyWithoutAuthorNestedInput: RecipeUpdateManyWithoutAuthorNestedInput;
    RecipeUpdateWithWhereUniqueWithoutAuthorInput: RecipeUpdateWithWhereUniqueWithoutAuthorInput;
    RecipeUpdateWithoutAuthorInput: RecipeUpdateWithoutAuthorInput;
    RecipeUpsertWithWhereUniqueWithoutAuthorInput: RecipeUpsertWithWhereUniqueWithoutAuthorInput;
    RecipeWhereInput: RecipeWhereInput;
    RecipeWhereUniqueInput: RecipeWhereUniqueInput;
    String: Scalars['String']['output'];
    StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
    StringFilter: StringFilter;
    StringNullableListFilter: StringNullableListFilter;
    StringWithAggregatesFilter: StringWithAggregatesFilter;
    User: User;
    UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
    UserCreateInput: UserCreateInput;
    UserCreateManyInput: UserCreateManyInput;
    UserCreateNestedOneWithoutRecipesInput: UserCreateNestedOneWithoutRecipesInput;
    UserCreateOrConnectWithoutRecipesInput: UserCreateOrConnectWithoutRecipesInput;
    UserCreateWithoutRecipesInput: UserCreateWithoutRecipesInput;
    UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
    UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
    UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
    UserOrderByWithRelationInput: UserOrderByWithRelationInput;
    UserRelationFilter: UserRelationFilter;
    UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
    UserUpdateInput: UserUpdateInput;
    UserUpdateManyMutationInput: UserUpdateManyMutationInput;
    UserUpdateOneRequiredWithoutRecipesNestedInput: UserUpdateOneRequiredWithoutRecipesNestedInput;
    UserUpdateWithoutRecipesInput: UserUpdateWithoutRecipesInput;
    UserUpsertWithoutRecipesInput: UserUpsertWithoutRecipesInput;
    UserWhereInput: UserWhereInput;
    UserWhereUniqueInput: UserWhereUniqueInput;
}>;
export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type HopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hop'] = ResolversParentTypes['Hop']> = ResolversObject<{
    alpha?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    alphaHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    alphaLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    beta?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    betaHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    betaLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    caryophyllene?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    caryophylleneHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    caryophylleneLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    cohumulone?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    cohumuloneHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    cohumuloneLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    farnesene?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    farneseneHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    farneseneLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    flavor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    humulene?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    humuleneHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    humuleneLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    myrcene?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    myrceneHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    myrceneLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    notes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    styles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    totalOil?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    totalOilHigh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    totalOilLow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    createManyHop?: Resolver<Array<ResolversTypes['Hop']>, ParentType, ContextType, RequireFields<MutationCreateManyHopArgs, 'data'>>;
    createManyRecipe?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationCreateManyRecipeArgs, 'data'>>;
    createManyUser?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateManyUserArgs, 'data'>>;
    createOneHop?: Resolver<ResolversTypes['Hop'], ParentType, ContextType, RequireFields<MutationCreateOneHopArgs, 'data'>>;
    createOneRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationCreateOneRecipeArgs, 'data'>>;
    createOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateOneUserArgs, 'data'>>;
    deleteManyHop?: Resolver<Maybe<ResolversTypes['BatchPayload']>, ParentType, ContextType, RequireFields<MutationDeleteManyHopArgs, 'where'>>;
    deleteManyRecipe?: Resolver<Maybe<ResolversTypes['BatchPayload']>, ParentType, ContextType, RequireFields<MutationDeleteManyRecipeArgs, 'where'>>;
    deleteManyUser?: Resolver<Maybe<ResolversTypes['BatchPayload']>, ParentType, ContextType, RequireFields<MutationDeleteManyUserArgs, 'where'>>;
    deleteOneHop?: Resolver<Maybe<ResolversTypes['Hop']>, ParentType, ContextType, RequireFields<MutationDeleteOneHopArgs, 'where'>>;
    deleteOneRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationDeleteOneRecipeArgs, 'where'>>;
    deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
    updateManyHop?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyHopArgs, 'data'>>;
    updateManyRecipe?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyRecipeArgs, 'data'>>;
    updateManyUser?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyUserArgs, 'data'>>;
    updateOneHop?: Resolver<Maybe<ResolversTypes['Hop']>, ParentType, ContextType, RequireFields<MutationUpdateOneHopArgs, 'data' | 'where'>>;
    updateOneRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationUpdateOneRecipeArgs, 'data' | 'where'>>;
    updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>>;
    upsertOneHop?: Resolver<ResolversTypes['Hop'], ParentType, ContextType, RequireFields<MutationUpsertOneHopArgs, 'create' | 'update' | 'where'>>;
    upsertOneRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationUpsertOneRecipeArgs, 'create' | 'update' | 'where'>>;
    upsertOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpsertOneUserArgs, 'create' | 'update' | 'where'>>;
}>;
export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    countHop?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountHopArgs>>;
    countRecipe?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountRecipeArgs>>;
    countUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountUserArgs>>;
    findFirstHop?: Resolver<Maybe<ResolversTypes['Hop']>, ParentType, ContextType, Partial<QueryFindFirstHopArgs>>;
    findFirstRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<QueryFindFirstRecipeArgs>>;
    findFirstUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindFirstUserArgs>>;
    findManyHop?: Resolver<Array<ResolversTypes['Hop']>, ParentType, ContextType, Partial<QueryFindManyHopArgs>>;
    findManyRecipe?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<QueryFindManyRecipeArgs>>;
    findManyUser?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindManyUserArgs>>;
    findUniqueHop?: Resolver<Maybe<ResolversTypes['Hop']>, ParentType, ContextType, RequireFields<QueryFindUniqueHopArgs, 'where'>>;
    findUniqueRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryFindUniqueRecipeArgs, 'where'>>;
    findUniqueUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindUniqueUserArgs, 'where'>>;
}>;
export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = ResolversObject<{
    author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
    email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    recipes?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<UserRecipesArgs>>;
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = any> = ResolversObject<{
    BatchPayload?: BatchPayloadResolvers<ContextType>;
    Hop?: HopResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Recipe?: RecipeResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
}>;
