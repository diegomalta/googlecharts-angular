export class PieChartConfig {
     title: string;
     pieHole: number

    constructor(title: string, pieHole: number) {
        this.title = title;
        this.pieHole = pieHole;
    }
}

export class BarChartConfig {
    title: string;
    hAxis: any;
    vAxis: any;

   constructor(title: string, hAxis: object, vAxis: object) {
       this.title = title;
       this.hAxis = hAxis;
       this.vAxis = vAxis;
   }
}