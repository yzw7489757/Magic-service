interface Performance {
  projectId: number;
  record: Record[];
  createTime: string;
  platform: string;
  broswerVersion: string;
  phoneModel: string;
  network: string;
  score: 'A' | 'B' | 'C';
}

type excludeRecord = Omit<Performance, 'record'>;

export interface PerformanceDbRecord extends excludeRecord {
  record: string[];
}

interface Record {
  fraction: number;
  time: number;
}
