import MockAdapter from 'axios-mock-adapter';
import { AxiosInstance } from 'axios';

import mockData from './mockData';

function mock(ax: AxiosInstance) {
  const mo = new MockAdapter(ax, {
    delayResponse: 200
  });

  Object.keys(mockData)
    .reduce((mo: any, key) => {
      const [method, pathname] = key.split('::');
      mo[method](pathname).reply((config: any) => {
        const res =
          typeof (mockData as any)[key] === 'function'
            ? (mockData as any)[key](config.data || config.params)
            : (mockData as any)[key];
        console.log(
          '**mock**',
          method,
          pathname,
          config.data || config.params,
          res
        );
        return [200, res];
      });
      return mo;
    }, mo)
    .onAny()
    .passThrough();
}

export default mock;
