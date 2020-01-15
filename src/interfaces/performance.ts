interface IPerformance{
    projectId: number;
    record: IRecord[];
    createTime: string;
    platform: string;
    broswerVersion: string;
    phoneModel: string;
    network: string;
    score: "A" | "B" | "C"
}

type excludeRecord = Omit<IPerformance,'record'>

export interface PerformanceDbRecord extends excludeRecord{
  record:string[];
}

interface IRecord {
  fraction: number;
  time: number;
}