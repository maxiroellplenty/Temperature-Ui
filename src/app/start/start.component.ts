import { Component } from '@angular/core';
import { Http } from '@angular/http';

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

    constructor(private http:Http)
    {
        this.isToggled = true;
        this.setStatus();
        this.callTemperatureDataScript();
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

    public callTemperatureDataScript():void
    {
        this.http.get('http://localhost/getData.php')
            .map((res:any) => res.json())
            .subscribe((res:any) => {
                console.log(res);
                this.createSqlMetaData(res);
                this.createTemperatureData();
            });
    }

    private createSqlMetaData(data:any):void
    {
        this.tempLogData[0] = {
            data: []
        };
        for(let row of data)
        {
            this.tempLogData[0].data.push(
                {
                    Ort: row.Ort,
                    Name: row.Name,
                    Wert: row.Wert,
                    Value: row.Value
                });
        }
        console.log(this.tempLogData);
    }

    private createTemperatureData():void
    {
        for(let data of this.tempLogData[0].data)
        {
            this.lineChartData.push(Number(data.Value));
            this.lineChartLabels.push(data.Wert);
        }
    }

}


