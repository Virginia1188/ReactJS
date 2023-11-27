import { useParams } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";


export default function GameDetails({ }) {
    const { email } = useContext(AuthContext);
    const [game, setGame] = useState({});
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(reducer, []);
    const { gameId } = useParams();
   

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);

        commentService.getAll(gameId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_GAMES',
                    payload: result,
                })
            });
    }, [gameId]);

    const addCommenthandler = async (values) => {
       
        const newComment = await commentService.create(
            gameId,
            values.comment,
        );
        newComment.owner = { email };
        // setComments(state => [...comments, { ...newComment, owner: { email } }]);
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment,
        })
    }
    const {values, onChange, onSubmit} = useForm(addCommenthandler, {
        comment: '',

    });

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p> {email}: {text}</p>
                            </li>
                        ))}

                        {/* <!-- Display paragraph: If there are no games in the database --> */}
                        {comments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                        )}
                    </ul>


                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>

                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}