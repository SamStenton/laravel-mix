let MochaTesting = require('../MochaTesting');

class TestingPlugin {
    /**
     * Create a new plugin instance.
     *
     * @param {Array} files
     */
    constructor(src, config = {}) {
        this.src = src;
    }


    /**
     * Apply the plugin.
     */
    apply() {
      new MochaTesting(
          this.src, this.config
      ).run();
    }
}

module.exports = TestingPlugin;
