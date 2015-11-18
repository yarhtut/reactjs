jest.dontMock('../../javascript/src/example-component.js');

describe('ExampleComponent', () => {

    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        ExampleComponent = require('../../javascript/src/example-component.js');

    describe('initial state', () => {
        it('should not be selected by default', () => {
            var component = TestUtils.renderIntoDocument(
                <ExampleComponent />
            );

            expect(component.state.selected).toBe(false);
        });
    });

});
