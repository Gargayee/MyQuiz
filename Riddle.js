class Riddle{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
         });
    }

    async start(){
        if(gameState === 0){
             contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
           question.display();
        }
    }

    play(){
        question.hide();
        this.input1.hide();
        this.input2.hide();
        this.title.hide();
        this.button.hide();        
        background("Yellow");
        textSize(30);
        text("Result of the Quiz",340 ,50);
        text("  -----------------------",320 ,65);
        Contestant.getPlayerInfo();
        if(allContestants !==undefined){
            debugger;
            var display_Answers = 230;
            fill("blue");
            textSize(20);
            text("+NOTE: Contestant who answered correct are highlighted in green color", 130,230);

            for(var plr in allContestants){
                debugger;
                var correctAnswer = "2";
                if(correctAnswer === allContestants[plr].answer)
                fill("Green");
                else
                fill("Red")
                
                display_Answers+=30;
                textSize(20);
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers);
            }
        }
    }
}