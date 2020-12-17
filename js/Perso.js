class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Poyo?"
            ,"P O Y O !"
            ,"PoYo ?"
            ,"..."
            ,"Oyop"
            ,"PoyooooOOO ?"
            ,"Mhmm poyo"
            ,"Kouisine"
            ,"POYOOOO"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}
