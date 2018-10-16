var modal = document.body.querySelector(".cmodal");
var title =  document.body.querySelector(".cmodel-header h2");
var text =  document.body.querySelector(".cmodal-content");
var fText = document.body.querySelector(".cmodal-footer");

/*var okbtn = false;
var yesnobtn = false;
var header = false;
var content = '';
var footer = false;
var open = function(){};
var close = function() {};
var beforeOpen = function(){};
var beforeclose = function(){};*/
var header = true;
var footer = true;

function cModal(content, title, header, footer) {    
    this.content = content;   
    this.title = title;
    this.dheaderClass = 'chead';
    this.dcloseBtnclass = 'chbtn';
    this.headerClass = '';
    this.closeBtnclass = 'cbtn';
    this.footer = footer;
    this.modal = modal; 
    this.text = text;     
}

cModal.prototype = {
    closeModal: function () { 
        this.removeDialogModal();       
        //this.modal.classList.toggle("cshow-modal");
    },
    windowOnClick: function(e) {        
        if (e.target === modal) {
            this.closeModal();
        }
    },
    removeDialogModal: function() {
        this.modal.parentElement.removeChild(this.modal);
    },
    setDialogModal: function(v, hv, btn) {
        if (!document.body.querySelector(".cmodal")) {
            var d = this;
            this.modal = document.createElement("div");
            this.modal.setAttribute('class', 'cmodal');
            var m = document.createElement("div");
            m.setAttribute('class', 'cmodal-body');
            var c = document.createElement("div");
            c.setAttribute('class', 'cmodel-header');
            var h = document.createElement("h2");
            var hn = document.createTextNode(hv); 
            h.appendChild(hn);
            var cl = document.createElement("span");
            cl.setAttribute('class', 'cclose-button');
            var cln = document.createTextNode('X'); 
            cl.appendChild(cln);
            cl.addEventListener("click", function(){
                d.closeModal();
            });
            c.appendChild(h);
            c.appendChild(cl);       
            m.appendChild(c);
            this.text = document.createElement("div");
            this.text.setAttribute('class', 'cmodal-content');        
            this.text.innerHTML = v;        
            m.appendChild(this.text);
            var f = document.createElement("div");
            f.setAttribute('class', 'cmodal-footer');
            if(btn) {            
                if(btn['okbtn']) { 
                    var btn = d.createBtn('OK', 'btn btn-primary', function(){
                        d.closeModal();
                    });
                    f.appendChild(btn);
                    m.appendChild(f);
                } else if(btn['confirmbtn']){
                    var y = d.createBtn('YES', 'btn btn-primary', btn['confirmbtn'][1]);
                    var n = d.createBtn('NO', 'btn btn-default', function(){
                        d.closeModal();
                    });                   
                    f.appendChild(y); 
                    f.appendChild(n);
                    m.appendChild(f);
                } else if(btn['autoclose']){
                    setTimeout(function(){ 
                        d.closeModal();
                    }, btn['autoclose'][1]);                                       
                }            
            }     
            this.modal.appendChild(m);
            document.body.appendChild(this.modal);
        }
    }, 
    setModal: function(v, ar) {
        if (!document.body.querySelector(".scmodal")) {
            var t = this;
            this.modal = document.createElement("div");
            this.modal.setAttribute('class', 'scmodal');  
            var m = document.createElement("div");
            m.setAttribute('class', 'scmodal-body');        
            var cl = document.createElement("span");       
            cl.setAttribute('class', 'scclose-button'); 
            var cln = document.createTextNode('X'); 
            cl.appendChild(cln);
            cl.addEventListener("click", function(){
                t.closeModal();
            });
            this.text = document.createElement("div");
            this.text.setAttribute('class', 'cmodal-content');        
            this.text.innerHTML = v;       
            if(ar) {
                if(ar['closein']) {
                    m.appendChild(cl); 
                    m.appendChild(this.text);
                }
                if(ar['width']) {
                    m.setAttribute('style', 'width:'+ar['width']);                 
                }            
            } else {
                m.appendChild(this.text);
                this.modal.appendChild(cl);
            }   
            this.modal.appendChild(m);
            document.body.appendChild(this.modal); 
        }      
    },    
    setFooter: function() {
        var f = document.createElement("div");
        f.setAttribute('class', 'cmodal-footer');
        document.querySelector('.cmodal-body').appendChild(f);
    },
    showModal: function(ccl) {         
        var cc = (ccl)? ccl : this.closeBtnclass;              
        document.body.querySelector(".scclose-button").classList.add(cc);
        this.modal.classList.toggle("cshow-modal");        
    },
    showDialogModal: function(hcl, ccl) { 
        var c = (hcl)? hcl : this.dheaderClass;
        var cc = (ccl)? ccl : this.dcloseBtnclass;
        document.body.querySelector(".cmodel-header").classList.add(c);      
        document.body.querySelector(".cclose-button").classList.add(cc);
        this.modal.classList.toggle("cshow-modal");        
    },
    setContent: function(c) {
        text.innerHTML = (c)? c : this.content;
    },
    setTitle: function(t) {
        title.innerHTML = (t)? t : this.title;
    },
    okDialog: function(c, t) {
        var d = this;
        d.setContent(c);
        d.setTitle(t);
        var btn = d.createBtn('OK', 'btn btn-primary', function(){
            d.closeModal();
        });
        this.setFooter();        
        fText.appendChild(btn);
        d.showDialogModal();         
    },
    autoCloseDialog: function(t) {
        var d = this;
        d.setContent(c);
        d.setTitle(t);
        setTimeout(function(){ 
            d.closeModal();
         }, t);
         d.showDialogModal();
    },
    confirmDialog: function(c, t, e) {
        var d = this;
        d.setContent(c);
        d.setTitle(t);
        var y = d.createBtn('YES', 'btn btn-primary', e);
        var n = d.createBtn('NO', 'btn btn-default', function(){
            d.closeModal();
        });
        this.setFooter(); 
        fText.appendChild(y); 
        fText.appendChild(n); 
        d.showDialogModal();
    },
    createBtn: function(t, c, e) {
        var btn = document.createElement("BUTTON");
        btn.setAttribute('class', c);
        var t = document.createTextNode(t);
        btn.appendChild(t);
        btn.addEventListener('click',e)
        return btn;
    }
}

var cm = new cModal();

window.addEventListener("click", function(e){ 
    cm.windowOnClick(e);
});

export { cModal };