## RRPlayer

<a href="https://imgbb.com/"><img src="https://image.ibb.co/grcuCo/demo_rr_player.png" alt="demo_rr_player" border="0"></a>

<br />

## Functional specs:

● When user opens the page, he sees the list of tracks and a player in
unplayed state.

● When user clicks on the track, it turns into selected mode in the playlist
and shows the elapsed time while playing

● When user clicks on the track, player starts the playback and turns into the
playing state, showing the progress

● When user clicks on the currently playing track in the playlist OR on the
pause in the player interface, the playback stops

● When user clicks on the player's progress bar, the playback begins at the
selected timestamp, the elapsed time in the playlist should be changed
accordingly

● When user clicks on the "play next" button, the next track in the playlist
starts. If the track is the last in the playlist, the first in the playlist starts. The
same applies to the "play previous"

● When user clicks on the volume adjuster, the volume level changes
accordingly

● When user searches in the input, the list is filtered to match the query.
Make a simple search to match on the first 3 letters and more.

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more, today.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!

- _The best test setup:_ Automatically guarantee code quality and non-breaking
  changes. (Seen a react app with 99% test coverage before?)
- _Native web app:_ Your app's new home? The home screen of your users' phones.
- _The fastest fonts:_ Say goodbye to vacant text.
- _Stay fast_: Profile your app's performance from the comfort of your command
  line!
- _Catch problems:_ AppVeyor and TravisCI setups included by default, so your
  tests get run automatically on Windows and Unix.

There’s also a <a href="https://vimeo.com/168648012">fantastic video</a> on how to structure your React.js apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions.

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, `styled-components`, redux-saga, FontFaceObserver</i></sub>

## Quick start

1.  Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git`
2.  Move to the appropriate directory: `cd react-boilerplate`.<br />
3.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`_<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
4.  Run `npm run clean` to delete the example app.

Now you're ready to rumble!

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.
