# 2017-03-25 Vanilla Hot Module Replacement Exercise

MIT licensed, this is a exercise following [the official Hot Module Replacement guide](https://webpack.js.org/guides/hmr-react/) referencing [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate/tree/next) also.

## Exercise Summary

First this is my first webpack 2 project. Then this is a quick exercise on plain
HRM without react-hot-loader that preserve component states that is to be done
next.
One thing to note is how react-hot-loader now have a presense even with plain
HRM, and how react hot loader 3 require the use of standard HMR hooks making the
two setup looking quite identical. It is, of course is good thing - less
confusion and more robust/ stable API.

Major motivation for the series of two exercises are first migration to webpack
2, HMR which I haven't tried before and upgrade to hot loader 3.

The other motivation is the decision to go for relying on node.js code more for
build and server bootstraps. Although I have limited this use with the
justification that mixing build and runtime is extremely confusing I have
realised that this is how most production projects does it. The need to invoke
webpack and hot reload code programmatically also ease my doubts a little.

Of course it doesn't mean that I cannot have clear separation between build
script and runtime code (is it compiled and bundled through webpack). I simply
recognise the approach as something useful and an required skill. Desired
outcome by completing the exercises are hopefully some proficiency in server
side javascript in builds.
