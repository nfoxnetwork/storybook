import Card from '../components/Card';
import {
  withKnobs,
  text,
  boolean,
  number,
} from '@storybook/addon-knobs';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Card },
  template: `<Card
    :imageUrl="imageUrl"
    :title="title"
    :summary="summary"
    :isLiked="isLiked"
    :stars="stars"
    :likes="likes"
    :rating="rating"
    :reviews="reviews"
    @pin="onPin"
    @star="onStar"
    @like="onLike"
  />`,
  props: {
    imageUrl: {
      default: text('imageUrl', 'https://picsum.photos/256')
    },
    title: {
      default: text('title', 'タイトルテキスト')
    },
    summary: {
      default: text('summary', 'サマリーテキスト')
    },
    isLiked: {
      default: boolean('isLiked', false)
    },
    stars: {
      default: number('stars', 12)
    },
    likes: {
      default: number('likes', 12)
    },
    rating: {
      default: number('rating', 4, {range: true, min: 0, max: 5, step: 1})
    },
    reviews: {
      default: number('reviews', 123)
    }
  },
  methods: {
    onPin() {
      alert( 'pinned' );
    },
    onStar() {
      alert( 'stared' );
    },
    onLike() {
      alert( 'liked' );
    },
  },
});
