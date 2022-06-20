import socket 
import pyfiglet
from datetime import datetime

def scan(target, ports = 80):
    start = datetime.now()
    print('\n' + 'scan report for (' + str(target) + ')')
    print("Scanning started at:" + str(datetime.now()))
    print("-" * 50)
    #Range Scan
    if '-' in ports:
        s = ports.split('-')
        for port in range(int(s[0]),int(s[1])):
            scan_port(target,port)
    #specify ports
    elif ',' in ports:
        for port in ports.split(','):
            scan_port(target,int(port))
   #specify port
    else:
        scan_port(target,int(ports))
    end = datetime.now()
    
    print("-" * 50)
    print("🔎 Scanning Completed in: " ,end - start)
def scan_port(ip_address,port):


    try:
        sock = socket.socket()
        sock.connect((ip_address,port))
        print(str(port), "Opened")
    except:
        pass
            
banner = pyfiglet.figlet_format("PORT SCANNER")
print(banner)
#ask the user to enter targets and ports 
targets = input("Enter Target or multiple targets  (split by ,) : ")
ports = input("To enter a range use(1-100), To enter specific ports use (80,44,50,53),To scan only one port type the specific port number.  Enter ports:")

# check if the user enter one or more targets
if ',' in targets:
    print("Scanning Multiple Targets") 
    for target in targets.split(','):
        scan(target.strip(' '), ports)
else:
    scan(targets,ports)         
