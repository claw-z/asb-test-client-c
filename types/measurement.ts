export interface Measurement {
  cabinet: Cabinet;
  drivers: Driver[];
  frequency: Frequency;
  impedance: Impedance;
}

export interface Cabinet {
  brandName: string;
  productName: string;
  enclosureType: string;
  weight: number;
  dimension: string;
  manufacturingYear: number;
  description: string;
  ownerUid: string;
  createdAt: Date;
}

export interface Driver {
  brandName: string;
  productName: string;
  driverType: string;
  manufacturingYear: number;
  nominalDiameter: number;
  nominalImpedance: number;
  continuousPowerHandling: number;
  cabinetUid: string;
  createdAt: Date;
}

export interface Frequency {
  measuredBy: string;
  source: string;
  sweepLength: string;
  measuredAt: string;
  frequencyWeightings: string;
  targetLevel: string;
  note: string;
  smoothing: string;
  measurements: FrequencyResponse[];
  cabinetUid: string;
  createdAt: Date;
}

export interface FrequencyResponse {
  frequency: number;
  spl: number;
  phase: number;
}

export interface Impedance {
  source: string;
  pistonDiameter: string;
  resonanceFrequency: string;
  dcResistance: string;
  acResistance: string;
  mechanicalDamping: string;
  electricalDamping: string;
  totalDamping: string;
  equivalenceCompliance: string;
  voiceCoilInductance: string;
  efficiency: string;
  sensitivity: string;
  coneMass: string;
  suspensionCompliance: string;
  forceFactor: string;
  kR: string;
  xR: string;
  kI: string;
  xI: string;
  cabinetUid: string;
  impedanceCurve: ImpedanceMeasurement[];
  createdAt: Date;
}

export type ThieleSmallParameters = Omit<
  Impedance,
  'impedanceCurve' | 'cabinetUid'
>;

export interface ImpedanceMeasurement {
  frequency: number;
  impedance: number;
  phase: number;
}

export interface ChartData {
  frequency: number[];
  impedance: number[];
  phase: number[];
}

export interface ImpedanceData {
  impedanceCurve: ImpedanceMeasurement[];
}
