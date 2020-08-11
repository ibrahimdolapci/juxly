import { Provider, InjectionToken, Type } from '@angular/core';

export interface IHomeProvider {
  order: number;
  component: Type<any>;
}

export const HOME_PROVIDER = new InjectionToken<IHomeProvider>('Home Provider');

export function homeProvider({ order, component }: IHomeProvider): Provider {
  return {
    provide: HOME_PROVIDER,
    useValue: { order, component },
    multi: true,
  };
}
