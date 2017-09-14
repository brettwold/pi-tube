# pi-tube

A simple streaming tool

## Setup and installation

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

### Install all node libraries

```
npm install
```

### Run

```
npm run dev
```
