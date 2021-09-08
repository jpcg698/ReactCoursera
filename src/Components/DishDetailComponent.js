import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap"

function DishDetail({dish}){


    const comments = dish.comments.map((comment)=>{
        return(
        <div>
            <li key={comment.id}>
                {comment.comment}
            </li>
            <li>
                ---{comment.author} , {comment.date}
            </li>
        </div>
            )
    })

    return(
        <div className="row">
        <Card className="col-12 col-md-5 m-1">
            <CardImg src={dish.image}/>
            <CardBody>
                <CardTitle>
                    {dish.name}
                </CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Card>
        <div className="col-12 col-md-5 m-1">
            <h4>
                Comments
            </h4>
            <ul className="list-unstyled">
            {comments}
            </ul>

        </div>
        </div>
    )
}

export default DishDetail