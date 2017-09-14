import kill from 'tree-kill';
import childProcess from 'child_process';
import nodeFileCache from 'node-file-cache';

const cache = nodeFileCache.create();
const spawn = childProcess.spawn;
const KEY_STREAM_IDS = "streamIds";

export default class StreamService {

  constructor() {
    this.child = null;
    this.currentStream = null;
    this.streams = cache.get(KEY_STREAM_IDS);

    if(this.streams == null) {
      this.streams = {};
    }
  }

  getCurrentStream() {
    if(this.currentStream) {
      return this.currentStream;
    }
  }

  getStreams() {
    for(let idx in this.streams) {
      if(this.currentStream != null && this.streams[idx].id == this.currentStream.id) {
        this.streams[idx].playing = true;
      } else {
        this.streams[idx].playing = false;
      }
    }
    return this.streams;
  }

  addStream(streamId, name) {
    this.streams[streamId] = {
        id: streamId,
        name: name
    };
    cache.set(KEY_STREAM_IDS, this.streams);
  }

  removeStream(streamId) {
    delete this.streams[streamId];
    cache.set(KEY_STREAM_IDS, this.streams);
  }

  startStream(streamId) {
    if(this.streams[streamId]) {
      this.stopStreams();
      console.log("Starting streaming for streamId: " + streamId);
      let scriptArgs = ['stream-to-youtube.sh', streamId];
      this.currentStream = this.streams[streamId];
      this.child = spawn('sh', scriptArgs);
    } else {
      console.log("Attempt to start and unknown stream");
    }
  }

  stopStreams() {
    if(this.child !== null) {
      kill(this.child.pid)
    }
    this.currentStream = null;
  }
}
