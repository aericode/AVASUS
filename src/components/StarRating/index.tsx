import { Rating } from 'react-simple-star-rating'
import { theme } from '../../theme'
import { Container, NumberRating } from './style'

interface StarRatingProps {
  fontSize: number,
  rating: string
}

export function StarRating({fontSize, rating}: StarRatingProps) {


  return (
    <Container>
      <Rating
      fillColor = {theme.COLORS.RED_300}
      initialValue={ Math.round(Number(rating)) || 0}
      readonly
      size={fontSize+5}
      />
      <NumberRating fontSize={fontSize}>
        {rating}
      </NumberRating>
    </Container>
  )
}