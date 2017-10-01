exports.config = {
  namespace: 'ajonp',
  generateDistribution: true,
  bundles: [
    { components: ['ajonp-video-capture'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
