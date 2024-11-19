import { App, Widget } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar"
// import MprisPlayers from "./widget/MediaPlayer"

App.start({
    css: style,
    instanceName: "js",
    requestHandler(request, res) {
        print(request)
        res("ok")
    },
    main: () => App.get_monitors().map(Bar),
})

// App.start({
//     instanceName: "players",
//     css: style,
//     main: () => {
//         new Widget.Window({}, MprisPlayers())
//     }
// })