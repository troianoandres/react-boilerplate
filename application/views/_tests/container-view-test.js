const ContainerView = require('../container-view');

const IndexView = require('application/views/index-view');

describe('asd', function () {
    let renderer;

    it('asd', function () {
        renderer = utils.render(<ContainerView />, ['div', IndexView], {router: {push: stub()}});

        //console.log(renderer.component);

        expect(true).to.equal(true);
    });
});