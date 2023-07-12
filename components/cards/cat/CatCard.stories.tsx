import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
};

export const Cat = (args: ICatCard) => <CatCard {...args} />;

Cat.args = {
  ...mockCatCardProps.cat,
};
