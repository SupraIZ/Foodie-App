import Link from "next/link";
import Image from "next/image";
import classes from "./meal-item.module.css";

export default function MealItem(props) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={`https://supratim-nextjs-demo-users-image.s3.ap-south-1.amazonaws.com/${props.image}`}
            alt={props.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{props.title}</h2>
          <p>by {props.creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{props.summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${props.slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
