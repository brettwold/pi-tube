# pi-tube

A simple streaming tool to stream video from a RaspberryPi to YouTube.

This application is a simple web server application that will allow you to setup any number of stream events matching events in your YouTube live_dashboard. All you need is the event ID. Once you have entered the event ids you can then use the web interface to stop and start the streams.

> Note: only one stream should be active at a time!

## Setup and installation manually (the hard way)

### Setup camera

First make sure that your camera is enabled on the RaspberryPi.

```
sudo raspi-config
```
Use the arrow keys to select `Enable Camera` press `Enter` then select `Yes`. You'll be promted to reboot.

You can test that the camera is working by calling

```
raspistill -o image.jpg
```

This will capture an image from the camera and save it into your home directory.

### Install av tools

```
sudo apt-get install libav-tools
```

### Install FFMPEG

TODO

### Clone this repo onto the Raspberry Pi

```
git clone https://github.com/brettwold/pi-tube.git
```

### Ensure you have a reasonably new version of node

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install all node libraries

```
npm install
```

### Run

```
npm run dev
```
This will start a node express server running on port 8080 of your RaspberryPi so switch to your browser and have a look.

## Optionally install piTube script in init.d

In this repo you'll find a piTube file. This can be placed in the /etc/init.d folder and used to start the web service on boot (instructions in the file).
