```
   _____                     ____                            
  / ___/____  ___  ___  ____/ / /_____  ___  ____  ___  _____
  \__ \/ __ \/ _ \/ _ \/ __  / //_/ _ \/ _ \/ __ \/ _ \/ ___/
 ___/ / /_/ /  __/  __/ /_/ / ,< /  __/  __/ /_/ /  __/ /    
/____/ .___/\___/\___/\__,_/_/|_|\___/\___/ .___/\___/_/     
    /_/                                  /_/                 
```

This software project is a small application that helps with the issue of audio drift issue on G-series processors
running macOS using [AMD-OSX/AMD_Vanilla](https://github.com/AMD-OSX/AMD_Vanilla) patches.

This is a small tray application that sits in your status bar with its heart broken that you're struggling with this
issue :C
![Speedkeeper Tray Application](./docs/Speedkeeper.png)

## Try it yourself!

Find your way to the [`Releases`](https://github.com/astrihale/speedkeeper/releases) page, there you can find the latest
version of the application and installation instructions.

*You might ask me, why is the application so large? It's Electron (a Node.js framework) :C*</br>
*I did try it in C++, but I could not cause the same effect. It seems that for one the overhead of a high level language
caused some usefulness!*

As I have only seen from my eyes that this helps, and some other lovely people also sent me a message or two that this
has helped, I would love to hear your feedback about this if it has worked ^^

## How does this application help?

Well, the issue seems to be a relation of clock speed of the CPU and the clock of the OS. When the processor is not busy
enough, the clock speed drops, and that makes the OS de-sync with the CPU, sound is very much dependent on timing, and
even the clock in the status bar knows to lag behind.

So this app is just meant to keep the CPU busy enough to make general usage much more bearable. I used the logic that is
inside this application for more than a year using this, and I've had a lot of work done successfully, whilst listening
to music all the time.

This application is pretty much doing "1 + 1" calculation all the time in the background. That action is quite enough to
keep the CPU busy, and it does not interact with IO to block anything. It is placed in the foreground, as all my
experiments to run this application in the background get stumped by macOS, where it just slows the process down a lot
when it is not in the foreground (so for me, it ran all the time in an open terminal window). Now I've made it into a
user-friendly small application that anyone can copy into `/Applications`, add to the list of `Login Items`, and start
and stop.

This really is not a full solution - this is a much deeper issue that I don't have too much time to explore. This does
not sync up the clocks by any standard means, it just makes the CPU & OS more likely to be in-sync, and the experience
of using the OS more smooth and sound less garbled.

## Development

If you want wish to do some modifications on my code, here are some instructions!
So, you just need `node`. That one is really easy to install (if you already have [`brew`](https://brew.sh)):

```shell
brew install node
```

Clone the project with git:

```shell
git clone https://github.com/Astrihale/speedkeeper
```

After that, you will need to download dependencies:

```shell
npm install
```

When that is done, you can edit the project, when you apply some changes, test the application with:

```shell
npm run dev
```

This can even stay running, and it will restart the application everytime you save a file with new changes! (People call
this LiveReload)
When you're done developing, you can generate a `.app` file for yourself by doing:

```shell
npm run package
```

This will generate a folder named `speedkeeper-darwin-x64`, and inside it is your generated application! Now you can use
it and test it!

## Contributing

If you wish to contribute to this project, feel free to report issues, create your forks and open some pull requests!
I have automated the process of release creation, so you don't need to worry about that, just watch out for my review
of your pull request, as I do require those!
