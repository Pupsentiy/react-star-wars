import UiButton from './UiButton'

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton

}

const Template = (args) => <UiButton {...args} />;

const props = {
    text: 'Hello',
    onClick: () => console.log('button click'),
    disabled: false,
    theme: 'light',
    classes: '',
}

export const Ligth = Template.bind({});

Ligth.args = {
    ...props,
    theme: 'light',
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark',
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true,
};