import {addFunctionSerializer} from '@vanilla-extract/css/functionSerializer';
import {runtimeStyledBox} from './runtime';
import type {ElementType} from 'react';
import {style, type StyleRule, styleVariants} from '@vanilla-extract/css';
import type {OptionsType, PropsMap, VariantGroup, VariantProps, WithDefaults} from './types.ts';
import {theme, type ThemeConfig} from '../theme/index.css.ts';
import {createSprinkles} from '@vanilla-extract/sprinkles';

export function createStyled(config: Partial<ThemeConfig>) {
  const {layers, properties} = {
    ...theme,
    ...config
  } as ThemeConfig;

  const sprinkles = createSprinkles(...properties);

  return function styled<As extends ElementType,
      Props extends VariantGroup,
      DefaultProps extends Partial<VariantProps<Props>>>(
      elementType: As, options: OptionsType<Props, DefaultProps>
  ) {

    const baseClass = style({
      '@layer': {
        [layers.base]: options.base ?? {},
      }
    });

    const variantsMap: Partial<PropsMap<Props>> = {};
    const defaultProps: Partial<PropsMap<Props>> = {};

    for (const key in options.variants) {
      const unscopedVariantProps = options.variants[key];
      const scopedVariantProps: Record<string, StyleRule> = {};
      for (const variantKey in unscopedVariantProps) {

        const rules = unscopedVariantProps[variantKey];

        scopedVariantProps[variantKey] = {
          "@layer": {
            [layers.variants]: rules as keyof object
          }
        };
      }
      const computedVariants = styleVariants(scopedVariantProps);

      // @ts-ignore
      if (Object.hasOwn(options.defaultVariants, key)) {
        // @ts-ignore
        Object.assign(defaultProps, {[key]: options.defaultVariants[key as keyof object]});
      }

      Object.assign(variantsMap, {[key]: computedVariants});
    }

    const args = [{
      elementType: elementType as string,
      baseClass,
      variants: variantsMap,
      defaultVariants: defaultProps,
    }];

    const Component = runtimeStyledBox<As, WithDefaults<Props, VariantProps<Props>, DefaultProps>>({
      elementType,
      baseClass,
      variants: variantsMap,
      defaultVariants: defaultProps,
    });

    // Then we tell vanilla-extract how to serialize the previous
    // function call by annotating its return value
    addFunctionSerializer(Component, {
      importPath: './core/runtime',
      importName: 'runtimeStyledBox',
      args
    });

    // Return the result of calling the runtime function
    return Component;
  };
}