function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function() {
  return `https://${this.ip}:80`;
};

const aws = new Server('Aws Germany', '178.25.61.159');

console.log(aws.getUrl());