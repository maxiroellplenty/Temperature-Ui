import { Component } from '@angular/core';

@Component({
               selector: 'start-component',
               template: require('./start.component.html'),
               styles:   [require('./start.component.scss')],
           })
export class StartComponent
{
    public status:string;
    public tempLogData:Array<any> = [];
    public isToggled:boolean;
    public lineChartData:Array<any> = [];
    public lineChartLabels:Array<any> = [];
    public lineChartType:string = 'line';


    constructor()
    {
        this.lineChartData.push([]);
        this.isToggled = true;
        for(let i:number = 0; i < 20; i++)
        {
            this.tempLogData.push({
                                      date:   new Date().toLocaleTimeString(),
                                      temperature: 32 + i,
                                      airPressure: 13311
                                  });
        }
        for(let data of this.tempLogData)
        {
            this.lineChartData[0].push(data.temperature);
            this.lineChartLabels.push(data.date);
        }
        this.setStatus();
    }

    public setStatus():void
    {
        if(this.isToggled)
        {
            this.status = 'online';
        }
        else
        {
            this.status = 'offline';
        }
    }
    private getCalcAverage():number
    {
        let average:number = 0;
        let counter:number = 0;
        for(let data of this.tempLogData)
        {
            counter++;
            average += data.temperature;
        }
        return average / counter;
    }
}


