import { Rating } from 'react-simple-star-rating'
import { theme } from '../../theme'
import { Container, NumberRating } from './style'

interface StarRatingProps {
  rating: string
}

export function StarRating({rating}: StarRatingProps) {


  return (
    <Container>
      <Rating
      fillColor = {theme.COLORS.RED_300}
      initialValue={ Number(rating) || 0}
      readonly
      size={20}
      />
      <NumberRating>
        {rating}
      </NumberRating>
    </Container>
  )
}