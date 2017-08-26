import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiSegment',
  props: {
    inverted: Boolean,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.inverted && 'inverted',
          this.vertical && 'vertical',
          'segment',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};