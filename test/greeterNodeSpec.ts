/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import { testing } from '../src/greeterNode';

describe('Sayings Greeter', () => {
    it('should greet', () => {
        const result = testing();

        expect(result).toBe.true;
    });
});
