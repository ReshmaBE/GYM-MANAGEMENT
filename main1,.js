package com.example.gymmanagement;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
public class MainActivity extends AppCompatActivity {
    EditText  editname;
    Button btnAddData;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         editname = (EditText) findViewById(R.id.editText_surname);
        btnAddData = (Button) findViewById(R.id.button_add);
    }
    public void addData(View view){
       final String Name=editname.getText().toString();
        Intent intent=new Intent(this,Main2Activity.class);
 Toast.makeText(MainActivity.this, "Successfully logged in!",Toast.LENGTH_LONG).show();

            intent.putExtra("value1",Name);
            startActivity(intent);
    }

}
