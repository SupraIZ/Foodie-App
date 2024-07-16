import MealItem from './meal-item'
import classes from './meals-grid.module.css'
export default function MealsGrid(props) {
    return (
        <ul className={classes.meals}>
            {props.meals.map(meal => <li key={meal.id}>
                <MealItem {...meal}/>
            </li>)}
        </ul>
    )
}