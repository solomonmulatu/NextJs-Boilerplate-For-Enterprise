import Footer, { IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'navigation/Footer',
  component: Footer,
  argTypes: {},
};

export const footer = (args: IFooter) => <Footer {...args} />;

footer.args = {
  ...mockFooterProps.footer,
};
