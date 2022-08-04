using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Stopwatch
{
    public partial class stopwatch : Form
    {
        int h, m, s,ms;
        stopwatch Stopwatch;
        
        public stopwatch()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void button4_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            h = 00;
            m = 00;
            s = 00;
            ms = 00;
            time();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            timer1.Enabled = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            mileseconds();
            time();
        }
        void mileseconds()
        {
            if(ms == 59)
            {
                ms = 00;
                seconds();
            }
            else
            {
                ms++;
            }

        }
        void seconds()
        {
            if (s == 59)
            {
                s = 00;
                minutes();
            }
            else
            {
                s++;
            }
        }
        void minutes()
        {
            if (m == 59)
            {
                m = 00;
                hours();
            }
            else
            {
                m++;
            }
        }
        void hours()
        {
            h++;
        }
        private void button2_Click(object sender, EventArgs e)
        {
            timer1.Enabled = false;
        }
        void time()
        {
            label1.Text = h.ToString() + ":" + m.ToString() + ":" + s.ToString() + ":" + ms.ToString();
        }
    }
}
