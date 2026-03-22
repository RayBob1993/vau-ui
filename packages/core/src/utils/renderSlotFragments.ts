import { type VNode, Fragment } from 'vue';

export function renderSlotFragments (children?: Array<VNode>): Array<VNode> {
  if (!children) {
    return [];
  }

  return children.flatMap(child => {
    if (child.type === Fragment) {
      return renderSlotFragments(child.children as Array<VNode>);
    }

    return [child];
  });
}
