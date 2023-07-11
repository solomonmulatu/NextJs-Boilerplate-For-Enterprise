import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
};

export const Base = (args: IBaseTemplate) => <BaseTemplate {...args} />;

Base.args = {
  ...mockBaseTemplateProps.base,
};
