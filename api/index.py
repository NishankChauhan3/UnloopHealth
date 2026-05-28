import sys
import os

# Add the server and root directories to the Python search path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
server_dir = os.path.join(parent_dir, 'server')

for d in [parent_dir, server_dir]:
    if d not in sys.path:
        sys.path.append(d)

from server.app import app
