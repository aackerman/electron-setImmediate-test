# electron-setImmediate-test

```
git clone https://github.com/aackerman/electron-setImmediate-test.git
cd electron-setImmediate-test
/Applications/Electron.app/Contents/MacOS/Electron .
```


#### Current behavior

```
❯ /Applications/Electron.app/Contents/MacOS/Electron .
[19683:0613/093232:WARNING:dns_config_service_posix.cc(150)] dns_config has unhandled options!
[19685:0613/093232:INFO:renderer_main.cc(200)] Renderer process started
[19686:0613/093232:INFO:renderer_main.cc(200)] Renderer process started
[19683:0613/093233:INFO:CONSOLE(7)] "end of the run loop", source: file:///Users/aackerman/src/electron-test/main.js (7)
[19683:0613/093233:INFO:CONSOLE(10)] "/Users/aackerman", source: file:///Users/aackerman/src/electron-test/main.js (10)
[19683:0613/093233:INFO:CONSOLE(4)] "on the next run loop", source: file:///Users/aackerman/src/electron-test/main.js (4
```

#### Expected behavior

I would expect the home path to be logged, then `setImmediate`, then the `setTimeout`.

