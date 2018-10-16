# popup
Pure java script popup
How to call all the custom popup and dialogbox?
To do the same create a class like that and use same or direct call these script.
export class Popup  {
    constructor ()          {}
    autoClose   (msg,t,s)   {
        let cm = new cModal();
        cm.setDialogModal(msg, t, {'autoclose': [true, s]});
        cm.showDialogModal();           
    } 
    confirm     (msg,t,e)   {
        let cm = new cModal();
        cm.setDialogModal(msg, t, {'confirmbtn': [true, e]});
        cm.showDialogModal(); 
        return cm;           
    }
    custom      (h,ar)      {
        let cm = new cModal();
        cm.setModal(h, ar);
        cm.showModal();
        return cm;          
    }   
    ok          (msg,t)     {
        let cm = new cModal();
        cm.setDialogModal(msg, t, {'okbtn': true});
        cm.showDialogModal();
    }     
}
