import {gameSliceAction} from "./gameSlice";

export const mapStateToQuestionProps = (state) => {
    return {
        hasHintedCharacter:state.game.characters,
        hasHintedYear:state.game.year,
        movies:state.game.movies,
        hasSubmittedAnswer:state.game.hasSubmittedAnswer,
    }
}
export const mapDispatchToQuestionProps = (dispatch) => {
    return {
        onNext: () => {
            dispatch(gameSliceAction.nextQuote())
        },
        onSubmit: (id) => {dispatch(gameSliceAction.submitAnswer(id))},
    }
}
export const mapStateToBadResultBoxProps = (state) => {
    return {
        movie:state.game.title
    }
}
export const mapStateToCorrectResultProps = (state) => {
    return {
        score:state.game.score,
        currentScore:state.game.currentScore,
        hints:state.game.hints,
    }
}
export const mapStateToHintViewProps = (state) => {
    return {
        characters:state.game.characters,
        year:state.game.year,
    }
}
export const mapDispatchToHintViewProps = (dispatch) => {
    return {
        onNext: () => {
            dispatch(gameSliceAction.nextQuote())
        },
        onCharacter:() => {
            dispatch(gameSliceAction.showCharacters())
        },
        onYear: () => {dispatch(gameSliceAction.showYear())}
    }
}
export const mapStateToQuoteBoxProps = (state) => {
    return {
        characters:state.game.characters,
        lines:state.game.lines,
        year:state.game.year,
        hints:state.game.hints
    }
}
