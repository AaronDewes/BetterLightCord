FROM gitpod/workspace-full-vnc

# Install dependencies
RUN sudo apt update \
    && sudo apt install -y libgtk-3-dev \
    && sudo apt clean && sudo rm -rf /var/cache/apt/* && sudo rm -rf /var/lib/apt/lists/* && sudo rm -rf /tmp/*
