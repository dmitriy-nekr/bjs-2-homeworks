"use strict"
class AlarmClock{
    constructor(){
        this.alarmCollection =[];
        this.intervalId = null;
    }
    addClock(clock , callback){
        if(clock === null || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for (let alarm of this.alarmCollection){
            if(clock === alarm){
                console.warn('Уже присутствует звонок на это же время');
                return;
            }
        }
          let alarm = {
              callback: callback,
              time: clock,
              canCall: true,
            }
          this.alarmCollection.push(alarm);
        }
        removeClock(time){
           this.alarmCollection = this.alarmCollection.filter(clock => {return clock.time != time} );
        }
        getCurrentFormattedTime(){
            let nowTime = new Date().toLocaleTimeString("ru-Ru", {
                hour: "2-digit",
                minute: "2-digit",
              });
            return nowTime;  
        }
        start(){
            if(this.intervalId != null){
                return;
            }
            this.intervalId = setInterval(() =>{this.alarmCollection.forEach((clock) => {
                if(clock.time === this.getCurrentFormattedTime() && clock.canCall === true){
                    clock.canCall = false;
                    clock.callback();
                }
            }
            )
            }, 1000);
        }
        stop(){
             clearInterval(this.intervalId);
             this.intervalId = null;
            }
        resetAllCalls(){
            this.alarmCollection.forEach((clock) =>{clock.canCall = true});
        }
        clearAlarms(){
            this.stop();
            this.alarmCollection = [];
        }
}
