# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.provision :shell, path: "script/bootstrap", privileged: false
  config.vm.network :forwarded_port, host: 8080, guest: 8080
end
